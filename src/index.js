import React from "react";
import ReactDOM from "react-dom";
import HomePage from './components/HomePage';
import ListPage from './components/ListPage';
import "./index.css"
import { useState } from 'react';


const App = () => {
    const [currentPage, setCurrentPage] = useState("home");
    return (
        <div>
            {currentPage === "home" && <HomePage />}
            {currentPage === "list" && <ListPage />}
            {currentPage === "home" && <button className="lbtn" onClick={() => setCurrentPage("list")}>點此開始</button>}
            {currentPage === "list" && <button className="hbtn" onClick={() => setCurrentPage("home")}>返回首頁</button>}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));