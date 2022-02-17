import {UserTypeAction} from "./userType";

const INITIAL_STATE = {
    currentUser: null,
    loading: false,
    error: null,
    profile: {
        ID: "",
        Password: "",
        created_at: "",
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
        refresh_token: "",
        token: "",
        updated_at: "",
        user_id: "",
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserTypeAction.LOGIN_START:
            return {
                ...state,
                loading: true,
                currentUser: state.currentUser,
            };
        case UserTypeAction.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload,
                profile: {
                    ID: action.payload.ID,
                    Password: action.payload.Password,
                    created_at: action.payload.created_at,
                    email: action.payload.email,
                    first_name: action.payload.first_name,
                    last_name: action.payload.last_name,
                    phone: action.payload.phone,
                    refresh_token: action.payload.refresh_token,
                    token: action.payload.token,
                    updated_at: action.payload.updated_at,
                    user_id: action.payload.user_id,
                }
            }
        case UserTypeAction.LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case UserTypeAction.REGISTER_START:
            return{
                ...state,
                loading:true,

            }

        case UserTypeAction.REGISTER_SUCCESS:
            return{
                ...state,
                loading:false,
                profile:action.payload
            }
        case UserTypeAction.REGISTER_SUCCESS:
            return{
                ...state,
                loading:false,
                error:action.payload
            }

        default:
            return state;
    }
};

export default userReducer;
