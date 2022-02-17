import {UserTypeAction} from "./userType";
import axios from 'axios';

let url = 'http://localhost:8000/';

export const setCurrentUser = (user) => {
    return {
        type: UserTypeAction.SET_CURRENT_USER,
        payload: user,
    };
};


const loginStart = () => ({
    type: UserTypeAction.LOGIN_START
})

const loginSucces = (data) => ({
    type: UserTypeAction.LOGIN_SUCCESS,
    payload: data,
})

const loginError = (error) => ({
    type: UserTypeAction.LOGIN_ERROR,
    payload: error,
});

export const DoLogin = (userInfo) => {
    console.log(userInfo)
    return (dispatch) => {
        dispatch(loginStart());

        axios.post(`${url}users/login`, userInfo)
            .then((res) => {
                dispatch(loginSucces(res.data))
            })
            .catch(err => {
                dispatch(loginError(err))
                console.log(err, `error from redux actions`)
            })

    }
}


const registerStart = () => ({
    type: UserTypeAction.REGISTER_START,

})

const registerSuccess = (data) => ({
    type: UserTypeAction.REGISTER_SUCCESS,
    payload: data

})


const registerError = (err) => ({
    type: UserTypeAction.REGISTER_ERROR,
    payload: err
})


export const DoSignup = (createUser) => {

    return dispatch => {
        dispatch(registerStart())
        console.log(createUser, `createUser`)
        axios.post(`${url}users/signup`, createUser)

            .then((res) => {
                dispatch(registerSuccess(res.data))

                dispatch(DoLogin(createUser))
            })
            .catch(err => {
                dispatch(registerError(err))
                console.log(err, `error from redux actions`)
            })
    }
}


