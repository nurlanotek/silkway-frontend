import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { BsChevronCompactLeft } from "react-icons/bs";
import {makeResPassFalse} from "../redux/reducer/visReducer";

const RemindPass = () => {

    const showResPass = useSelector(state => state.store.showResPass);
    const dispatch = useDispatch();

    return (
        <div className="resetPass" style={{display: showResPass ? 'block' : 'none'}}>
            <div className="resetPass__top-div">
                <button className="resetPass__back-btn" onClick={()=>dispatch(makeResPassFalse())}><BsChevronCompactLeft size={26}/></button>
                <h3 className="resetPass__title">Сбросить пароль</h3>

            </div>
            <p className="resetPass__subtitle">Введите Ваш e-mail и мы пришлем Вам ссылку для восстановления пароля </p>
            <input type="text" placeholder="example@gmail.com" className="resetPass__input login__fi"/>
            <br/>
            <button className="resetPass__remind-btn">Сбросить пароль</button>
            <br/>

        </div>
    );
};

export default RemindPass;