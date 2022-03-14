import React from 'react';

import {IoPersonCircle} from 'react-icons/io5'
import {useSelector} from "react-redux";

const MyArea = () => {
    const isMenuShown = useSelector(state=>state.store.isMenuShown);

    return (
        <div className="myarea">
            <div className="myarea__nav" style={{display : isMenuShown ? 'none' : 'block'}}>
                <ul className="myarea__ul">
                    <li className="myarea__first-li">
                        <IoPersonCircle className ="myarea__person"/>
                        <p>Личный кабинет</p>
                        <p>{JSON.stringify(localStorage.getItem('USER'))}</p>
                    </li>
                    <li className="myarea__li">Мои бронирования</li>
                    <li className="myarea__li">Мои промокоды</li>


                </ul>

            </div>
        </div>
    );
};

export default MyArea;