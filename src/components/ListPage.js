import React from "react";
import { useState } from 'react';
import "./ListPage.css";
import {Link} from "react-router-dom";

const ListPage = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if(newTask.trim() !== ""){
            setTasks([...tasks, newTask]);
            setNewTask("");
          }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((task, i) => i !== index));
    }

    return (
        <div>
            <nav className="ListPageNav">
                <input
                    value={newTask}
                    onChange={e => setNewTask(e.target.value)}
                    type="text"
                    placeholder="測試紀錄"
                    className="ListPageinput"
                />
                <button className="ListPageButton" onClick={addTask}>新增紀錄</button>
            </nav>
            <div class="ListPageMain">
                {tasks.map((task, index) => (
                    <p key={index}>{task}
                        <button className="deletebtn" onClick={() => removeTask(index)}>刪除</button>
                    </p>
                ))}
            </div>
            <Link to="/"><button className="hbtn">返回首頁</button></Link>
        </div>
    )
}

export default ListPage;