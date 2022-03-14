import React, {useEffect} from 'react';

import {Link, useNavigate} from 'react-router-dom'

import logo from "../images/logo.svg"
import {changeIsLogin, changeMenuStatus} from "../redux/reducer/visReducer";
import {useDispatch, useSelector} from "react-redux";
import {IoPersonCircle} from "react-icons/io5";
import {logoutUser} from "../redux/reducer/authReducer";

import { AiOutlineMenu } from "react-icons/ai";
import {TiTimesOutline} from "react-icons/ti";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMenuShown = useSelector(state=>state.store.isMenuShown);

    const logout =()=>{
        let refresh = localStorage.getItem('REFRESH')
        let payload = {
            "refresh": refresh.slice(1, (refresh.length-1))
        };
        console.log(payload)
        dispatch(logoutUser(payload));
        localStorage.clear();
        window.location.reload(false);
    }
    useEffect(()=>{

    },[localStorage]);

    const goMyArea =()=>{
        navigate('/my-area');
    };

    const showSmallMenu  =()=>{
        dispatch(changeMenuStatus());
        document.getElementById('small-menu').style.display ='flex';
    }

    return (
        <div className="header">
            <div className="container">
            <nav className="header__nav">
                <img src={logo} alt="logo" className="header__logo"/>

                <ul className="header__ul">
                    <li><Link  className="header__li" to='/' >Главная</Link></li>
                    <li><a  className="header__li" href="/hotels">Отели</a></li>
                    <li><a className="header__li" href="#"> О нас</a></li>
                    <li><Link className="header__li" to='/news' >Новости</Link></li>
                    <li><a className="header__li" href="#">Контакты</a></li>

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

                    <button className="header__my-area"
                            style={{display : localStorage.getItem('USER') ? 'block' : 'none'}}
                            onClick={()=>goMyArea()}
                    >
                        <IoPersonCircle className="header__my-area-icon"/>
                    </button>

                    <button className="header__login-btn"
                            style={{display : localStorage.getItem('USER') ? 'none' : 'block'}}
                            onClick={()=>dispatch(changeIsLogin())}>Войти</button>

                    <button className="header__login-btn"
                            style={{display : localStorage.getItem('USER') ? 'block' : 'none'}}
                            onClick={()=>logout()}>Выйти</button>



                </div>


                <button className="header__burger-btn" onClick={()=>showSmallMenu()}>{!isMenuShown ? <AiOutlineMenu className="header__burger-icon"/> :
                <TiTimesOutline className="header__burger-icon"/>}</button>

            </nav>


            </div>

        </div>
    );
};

export default Header;