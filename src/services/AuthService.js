import axios from "axios";

export function signUp(email, password) {
  const signUpData = {
    email,
    password,
    returnSecureToken: true,
  };
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDP0lG8BKCvDwOQ_vF9g_YYP3JpnrmB9AE`, signUpData
  );
}

export function login(email, password) {
  const loginData = {
    email,
    password,
    returnSecureToken: true,
  };
  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDP0lG8BKCvDwOQ_vF9g_YYP3JpnrmB9AE`, loginData
  );
}

export function formatError(errorResponse) {
    switch(errorResponse.error.message){
      case 'EMAIL_NOT_FOUND':
        return 'Email already Exists';
      case 'INVALID_PASSWORD':
        return 'Password is not valid';
      case 'USER_DISABLED': 
      return 'Account is disabled'; 
      default:
        return '';
    }
}

export function saveTokenLocalStorage(tockenDetails){
  localStorage.setItem('userDetails',JSON.stringify(tockenDetails)); 
}
