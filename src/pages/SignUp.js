import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import registration, {clearData, deleteVerMessage, sendMsgForEmpty, signUp} from "../redux/reducer/authReducer";
import {Link, useNavigate} from "react-router-dom";
import Individual from "../components/registration/Individual";
import Entity from "../components/registration/Entity";
import switchRegTypes, {showEntity, showIndividual, showProperty} from "../redux/reducer/SwitchRegTypesReducer";
import Property from "../components/registration/Property";


const SignUp = () => {
    const isMenuShown = useSelector(state=>state.store.isMenuShown);


    useEffect(()=>{
        dispatch(showIndividual());
        dispatch(deleteVerMessage());
    },[]);

    const dispatch =  useDispatch();
    const showIndividualFlag = useSelector(state =>state.switchRegTypes.showIndividual);

    return (
        <div className="signup" style={{display : isMenuShown ? 'none' : 'block'}}>
            <h2 className="signup__title">Выберите тип регистрации  :</h2>

            <div className="signup__choice">
                {/*<p className="signup__choice-p">Choose registration type:</p>*/}

                <div className="signup__labels">

                    <label className="signup__label">
                        <input type="radio" name="radio"
                               defaultChecked={showIndividualFlag}
                               checked={showIndividualFlag} onClick={()=>dispatch(showIndividual())}/>
                        <span className="signup__span">Физ лицо </span>
                    </label>

                    <label className="signup__label">
                        <input type="radio" name="radio" onClick={()=>dispatch(showEntity())}/>
                        <span className="signup__span">Юридическое лицо</span>
                    </label>

                    <label className="signup__label">
                        <input type="radio" name="radio" onClick={()=>dispatch(showProperty())}/>
                        <span className="signup__span">Зарегистрировать свой объект</span>
                    </label>
                </div>
            </div>
            <hr className="signup__devide-line"/>

            {/*<hr style={{marginBottom: '20px'}}/>*/}


            <Individual/>
            <Entity/>
            <Property/>






            {/*<div className="signup__message-div">*/}
            {/*    <p className="signup__message">User was susseccfullu registered :)</p>*/}
            {/*    <button className="signup__back-home-btn" >back home*/}

            {/*    </button>*/}
            {/*</div>*/}



            <div className="signup__entity-form" style={{display: 'none'}}>
                <input type="text" placeholder="email" className="signup__input"/>
                <input type="text" placeholder="password" className="signup__input"/>
                <button className="signup__btn">Sign Up</button>
            </div>





        </div>
    );
};

export default SignUp;