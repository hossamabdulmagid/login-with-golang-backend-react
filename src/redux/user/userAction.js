import {UserTypeAction} from "./userType";
import axios from 'axios';

let url = 'http://localhost:8000/';


const loginStart = () => ({
    type: UserTypeAction.LOGIN_START
})

const loginSuccess = (data) => ({
    type: UserTypeAction.LOGIN_SUCCESS,
    payload: data,
})

const loginError = (error) => (
    {
        type: UserTypeAction.LOGIN_ERROR,
        payload: error,
    });

export const DoLogin = (userInfo, toast) => {
    let hasError = false;
    console.log(userInfo)
    return (dispatch) => {
        dispatch(loginStart());

        axios.post(`${url}users/login`, userInfo)
            .then((res, err) => {
                console.log(res, `response`)
                if (res.status === 200) {
                    dispatch(loginSuccess(res.data))
                    // dispatch(
                    //     toast({
                    //         title: "Account Logged In.",
                    //         description: "We've Logged In your account.",
                    //         status: "success",
                    //         duration: 9000,
                    //         isClosable: true,
                    //         position: 'top-right'
                    //     })
                    // )
                } else {
                    // dispatch(
                    //     toast({
                    //         title: "Some Thing Wrong.",
                    //         description: err.response.data.error,
                    //         status: "error",
                    //         duration: 9000,
                    //         isClosable: true,
                    //         position: 'top-right'
                    //     })
                    // )
                }
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


export const DoSignup = (createUser, toast) => {

    return (dispatch) => {
        dispatch(registerStart())
        console.log(createUser, `createUser`)
        axios.post(`${url}users/signup`, createUser)
            .then((res) => {
                dispatch(registerSuccess(res.data))
                dispatch(DoLogin(createUser, toast))
                // dispatch(
                //     toast({
                //         title: "Account Created Success.",
                //         description: "We've Logged In your account.",
                //         status: "success",
                //         duration: 9000,
                //         isClosable: true,
                //         position: 'top-right'
                //     })
                // )
            })
            .catch(err => {
                dispatch(registerError(err))
                console.log(err, `error from redux actions`)
            })
    }
}

export const SignOut = (data) => ({
    type: UserTypeAction.USER_SIGN_OUT,
    payload: data,
})

