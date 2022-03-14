import axios from "axios";

const GET_DATA = 'GET_DATA';
const initialState = {
    data: [],


};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            return {
                ...state, data: action.data
            }
        }

        default :
            return state
    }
}


export const getData = () => {
    return (dispatch) => {
        axios("https://erzhan.pythonanywhere.com/api/v1/tours/4/?format=json")
            .then(({data}) => {
                return dispatch({type: GET_DATA, data: data})
            })
    }
};

