import React from 'react';
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <nav className="HomePageNav">React 練習專案</nav>
            <div className="HomePageMain">歡迎光臨我的頁面</div>
            <Link to="list"><button className="lbtn">點此開始</button></Link>
        </div>
    );
}

export default HomePage;