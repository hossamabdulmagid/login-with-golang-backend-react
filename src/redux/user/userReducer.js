import {UserTypeAction} from "./userType";

const INITIAL_STATE = {
    loading: false,
    error: null,
    profile: {
        ID: "",
        Password: "",
        CreatedAt: "",
        Email: "",
        FirstName: "",
        LastName: "",
        Phone: "",
        RefreshToken: "",
        Token: "",
        UpdatedAt: "",
        UserId: "",
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserTypeAction.LOGIN_START:
            return {
                ...state,
                loading: true,
            };
        case UserTypeAction.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: {
                    ID: action.payload.ID,
                    Password: action.payload.Password,
                    CreatedAt: action.payload.CreatedAt,
                    Email: action.payload.Email,
                    FirstName: action.payload.FirstName,
                    LastName: action.payload.LastName,
                    Phone: action.payload.Phone,
                    RefreshToken: action.payload.RefreshToken,
                    Token: action.payload.Token,
                    UpdatedAt: action.payload.UpdatedAt,
                    UserId: action.payload.UserId,
                }
            }
        case UserTypeAction.LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case UserTypeAction.REGISTER_START:
            return {
                ...state,
                loading: true,

            }

        case UserTypeAction.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: action.payload
            }
        case UserTypeAction.REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }


        case UserTypeAction.USER_SIGN_OUT:
            return {
                loading: true,
                profile: {
                    ID: null,
                    Password:  null,
                    CreatedAt:  null,
                    Email:  null,
                    FirstName:  null,
                    LastName:  null,
                    Phone:  null,
                    RefreshToken: null,
                    Token:  null,
                    UpdatedAt:  null,
                    UserId:  null,
                }
            }
        default:
            return state;
    }
};

export default userReducer;
