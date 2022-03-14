import axios from "axios";

const GET_DATA = 'GET_DATA';
const SHOW_LOGIN_DIV = 'SHOW_LOGIN_DIV';
const SHOW_RESPASS_DIV = 'SHOW_RESPASS_DIV';
const FALSE_RESPASS_DIV = 'FALSE_RESPASS_DIV';
const CHANGE_LOGIN_DIV = 'CHANGE_LOGIN_DIV';
const SET_FALSE_LOGIN = 'SET_FALSE_LOGIN';
const SHOW_SMALL_MENU = 'SHOW_SMALL_MENU';
const SET_SMALL_MENU_STATUS = 'SET_SMALL_MENU_STATUS';


const initialState = {
    showLogin: false,
    showResPass: false,
    isMenuShown: false

};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            return {
                ...state, data: action.data
            }
        }

        case SHOW_RESPASS_DIV:{
            return {
            ...state, showResPass: !state.showResPass,
                isMenuShown: false
            }
        }

        case FALSE_RESPASS_DIV:{
            return {
            ...state, showResPass: false
            }
        }

        case SHOW_LOGIN_DIV:{
            return {
            ...state, showLogin: !state.showLogin
            }
        }

        case SET_FALSE_LOGIN:{
            return {
            ...state, showLogin: false
            }
        }

        case SHOW_SMALL_MENU:{
            return {
                ...state, isMenuShown: !state.isMenuShown
            }
        }

        case SET_SMALL_MENU_STATUS:{
            return {
                ...state, isMenuShown: action.status
            }
        }


        default :
            return state
    }
}



export const changeIsLogin = () => ({
    type: SHOW_LOGIN_DIV
});

export const setFalseLogin = () => ({
    type: SHOW_LOGIN_DIV
});

export const changeIsResPass = () => ({
    type: SHOW_RESPASS_DIV
});

export const makeResPassFalse = () => ({
    type: FALSE_RESPASS_DIV
});

export const changeIsLoginFromAll = () => ({
    type: SHOW_LOGIN_DIV
});

export const setLoginToFalse =()=>({
    type: SET_FALSE_LOGIN
});

export const changeMenuStatus =()=>({
    type : SHOW_SMALL_MENU
});

export const setMenuStatus =(status)=>({
    type : SET_SMALL_MENU_STATUS,
    status
});

