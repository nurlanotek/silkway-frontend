import React from 'react';

import {Routes, Route, Link} from 'react-router-dom'
import News from "./News";
import Home from "./Home";
import logo from "../images/logo.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="container">
            <nav className="header__nav">
                <img src={logo} alt="logo" className="header__logo"/>

                <ul className="header__ul">
                    <li><Link  className="header__li" to='/' >Home</Link></li>
                    <li><a  className="header__li" href="#">Hotels</a></li>
                    <li><a className="header__li" href="#">About us</a></li>
                    <li><Link className="header__li" to='/news' >News</Link></li>
                    <li><a className="header__li" href="#">Contact</a></li>

                </ul>

                <div className="header__left-div">
                    <select className="header__select" name="lang" id="lang">
                        <option value="RU">RU</option>
                        <option value="ENG">ENG</option>
                    </select>

                    <select  className="header__select" name="cur" id="cur">
                        <option value="RU">USD</option>
                        <option value="ENG">KGS</option>
                        <option value="ENG">RUB</option>
                        <option value="ENG">UZS</option>
                    </select>

                    <button className="header__login-btn">LOGIN</button>
                </div>

            </nav>


            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/news" element={<News/>}/>

            </Routes>
            </div>
        </div>
    );
};

export default Header;