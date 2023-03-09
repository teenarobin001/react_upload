import { formatError, login,  saveTokenLocalStorage,  signUp } from "../../services/AuthService"

export const SIGNUP_CONFIRMED_ACTION = 'Signup Confirmed';
export const SIGNUP_FAILED_ACTION = 'Signup Failed';
export const LOADING_ACTION = 'Toggle Loading';
export const LOGIN_CONFIRMED_ACTION = 'Login COnfirmed';
export const LOGIN_FAILED_ACTION = 'Login Failed';
export const LOGOUT_ACTION = 'Logout Action'


export function signUpAction(email,password) {
    return  (dispatch) => {

        signUp(email,password).then(response =>{
           console.log(response);
           dispatch(LoadingToggleAction(false));
           saveTokenLocalStorage(response.data);
           dispatch(confirmedSignupAction(response.data))
        })
        .catch(error =>{
            const errorMessage = formatError(error.response.data);
            dispatch(LoadingToggleAction(false))
            dispatch(signupFailedAction(errorMessage));
            console.log(errorMessage,'errorMessage');
        });
    }
}

export function loginAction(email,password,navigate){
    return  (dispatch) => {
        login(email,password).then((response) =>{
            dispatch(LoadingToggleAction(false));
            saveTokenLocalStorage(response.data);
            dispatch(confirmedLoginAction(response.data));
            navigate('/')
        })
        .catch(error =>{
            const errorMessage = formatError(error.response.data);
            dispatch(LoadingToggleAction(false));
            dispatch(loginFailedAction(errorMessage));
            console.log(errorMessage,'errorMessage');
        })
    }
}

export function logoutAction(navigate) {
    localStorage.removeItem('userDetails');
    
    navigate('/login')
    return{
        type: LOGOUT_ACTION,
        
    }
}

export function confirmedLoginAction(payload){
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload
    }
}

export function loginFailedAction(message) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload:message
    }
}
export function confirmedSignupAction(payload){
return{
    type: SIGNUP_CONFIRMED_ACTION,
    payload
}
}

export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload:message
    }
}

export function LoadingToggleAction(status){
    return {
        type:LOADING_ACTION,
        payload:status
    }
}