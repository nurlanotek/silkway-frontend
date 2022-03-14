import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {changeIsLogin, changeMenuStatus, setMenuStatus} from "../redux/reducer/visReducer";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../redux/reducer/authReducer";

import {IoPersonCircle} from "react-icons/io5";


const SmallMenu = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        let refresh = localStorage.getItem('REFRESH')
        let payload = {
            "refresh": refresh.slice(1, (refresh.length - 1))
        };
        console.log(payload)
        dispatch(logoutUser(payload));
        localStorage.clear();

        window.location.reload(false);
    }
    useEffect(() => {

    }, [localStorage]);

    const goMyArea = () => {
        navigate('/my-area');
    };

    const isMenuShown = useSelector(state=>state.store.isMenuShown);

    const changeMenuStatus  =(str)=>{
        // dispatch(changeMenuStatus());
        dispatch(setMenuStatus(false));
        document.getElementById('small-menu').style.display ='none';
        navigate(str);
    };



    return (
        <div className="header__small-menu" id="small-menu"
             style={{display: isMenuShown ? 'block' : 'none'}}
        >

            <div className="header__left-div-small">

                <div className="header__selects">
                    <select className="header__select" name="lang" id="lang">
                        <option value="RU">RU</option>
                        <option value="ENG">ENG</option>
                    </select>

                    <select className="header__select" name="cur" id="cur">
                        <option value="RU">USD</option>
                        <option value="ENG">KGS</option>
                        <option value="ENG">RUB</option>
                        <option value="ENG">UZS</option>
                    </select>
                </div>




            </div>


            <ul className="header__ul-small">
                <li onClick={()=>changeMenuStatus('/')}><Link className="header__li" to='/'>Главная</Link></li>
                <li onClick={()=>changeMenuStatus('/hotels')}><a className="header__li" href="/hotels">Отели</a></li>
                <li onClick={()=>changeMenuStatus('#')}><a className="header__li" href="#"> О нас</a></li>
                <li onClick={()=>changeMenuStatus('/news')}><Link className="header__li" to='/news'>Новости</Link></li>
                <li onClick={()=>changeMenuStatus('/#')}><a className="header__li" href="#">Контакты</a></li>

            </ul>


            <div className="header__btns">
                <button className="header__login-btn-small"
                        style={{display: localStorage.getItem('USER') ? 'none' : 'block'}}
                        onClick={() => dispatch(changeIsLogin())}>Войти
                </button>

                <button className="header__login-btn-small"
                        onClick={()=>changeMenuStatus('/')}
                        style={{display: localStorage.getItem('USER') ? 'block' : 'none'}}
                        onClick={() => logout()}>Выйти
                </button>

                <button className="header__login-btn-small"
                        onClick={()=>changeMenuStatus('/my-area')}
                        style={{display: localStorage.getItem('USER') ? 'block' : 'none'}}
                        // onClick={() => goMyArea()}
                    >
                    Мой профиль
                </button>
            </div>



        </div>
    );
};

export default SmallMenu;