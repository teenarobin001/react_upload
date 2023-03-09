import { LOADING_ACTION, LOGIN_CONFIRMED_ACTION, LOGIN_FAILED_ACTION, LOGOUT_ACTION, SIGNUP_CONFIRMED_ACTION, SIGNUP_FAILED_ACTION } from "../actions/AuthActions"

const initialState = {
    auth:{
        email:'',
        idToken:'',
        localId:'',
        expiresIn:'',
        refreshToken:''
    },
    errorMessage:'',
    successMessage:'',
    showLoading: false
}

export default function AuthReducer (state = initialState, action)  {
    if(action.type === SIGNUP_CONFIRMED_ACTION) { 
        return {
            ...state,
            auth:action.payload,
            errorMessage:'',
            successMessage:'SignUp Successfully Completed',
            showLoading:false
        }
    }
    if(action.type === LOGIN_CONFIRMED_ACTION){
        return {
            ...state,
            auth:action.payload,
            errorMessage:'',
            showLoading:false,
            successMessage:'Login Success'
        }
    }

    if(action.type === LOGIN_FAILED_ACTION) {
        return {
            ...state,
            errorMessage: action.payload,
            showLoading:false
            
        } 
    }

    if(action.type === SIGNUP_FAILED_ACTION){
        return{
            ...state,
            errorMessage:action.payload,
            showLoading:false
        }
    }
    if(action.type === LOADING_ACTION) {
        return{
            ...state,
            showLoading:action.payload
        }
    }
    if(action.type === LOGOUT_ACTION){
        return{
            ...state,
            errorMessage:'',
            successMessage:'',
            auth:{
                email:'',
                idToken:'',
                localId:'',
                expiresIn:'',
                refreshToken:''
            }
        }
    }

 return state
}