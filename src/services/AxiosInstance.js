import axios from "axios";
import {store} from '../store/store';

const axiosInstance = axios.create({
    baseURL : `https://react-app-78f19-default-rtdb.firebaseio.com/`,
});

axiosInstance.interceptors.request.use((config) => {
    const state = store.getState();
    const token  = state.auth.auth.idToken;
    console.log(state)
    config.params = config.params || {}
    config.params['auth'] = token;

    return config;
})

export default axiosInstance;