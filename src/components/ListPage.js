import React from "react";
import { useState, useEffect } from 'react';
import "./ListPage.css";
import { Link } from "react-router-dom";
import { addDoc, collection, deleteDoc, onSnapshot, query, doc } from "firebase/firestore";
import { db } from '/src/firebase'

const ListPage = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // create
    const createTodo = async (e) => {
        e.preventDefault(e);
        if (newTask.trim() !== "") {
            await addDoc(collection(db, 'todos'), {
                text: newTask
            })
            setNewTask("");
        }
    }

    // read 
    useEffect(() => {
        const q = query(collection(db, 'todos'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let todosArr = []
            querySnapshot.forEach((doc) => {
                todosArr.push({ ...doc.data(), id: doc.id })
            });
            setTasks(todosArr)
        })
        return () => unsubscribe()
    }, [])

    // delete
    const deleteTodo = async (id) => {
        await deleteDoc(doc(db, 'todos', id))
    }

    return (
        <div>
            <nav className="ListPageNav">
                <form onSubmit={createTodo}>
                    <input
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        type="text"
                        placeholder="測試紀錄"
                        className="ListPageinput"
                    />
                    <button className="ListPageButton">新增紀錄</button>
                </form>
            </nav>
            <div className="ListPageMain">
                {tasks.map((task, index) => (
                    <p className="onetask" key={index}>{task.text}
                        <button className="deletebtn" onClick={() => deleteTodo(task.id)}>刪除</button>
                    </p>
                ))}
            </div>
            <Link to="/"><button className="hbtn">返回首頁</button></Link>
        </div>
    )
}

export default ListPage;