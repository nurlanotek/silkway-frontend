import React from 'react';
import Login from "../components/Login";
import RemindPass from "../components/RemindPass";
import {useSelector} from "react-redux";

const News = () =>{
    const isMenuShown = useSelector(state=>state.store.isMenuShown);

    return (
        <div className="news" style={{display : isMenuShown ? 'none' : 'block'}}>
            <Login/>
            <RemindPass/>
            news page
        </div>
    );
};

export default News;