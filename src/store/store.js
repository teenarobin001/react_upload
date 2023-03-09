
import { applyMiddleware, createStore, compose, combineReducers } from "redux"; 
import PostsReducer from "./reducer/PostsReducer";
import thunk from "redux-thunk";
import AuthReducer from "./reducer/AuthReducer";


const loggerMiddleware = (store) => (next) => (action) => {
  console.log("dispatching action", action);
//   console.log("before dispatching", store.getState());
  let result = next(action);
//   setTimeout(() => {
//     console.log("dispatch timeout");
//   }, 5000);
//   console.log("next state", store.getState());
  return result;
};

const fetchDataMiddleware = (store) => (next) =>(action) => {
    
    return next(action)
}


const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  post:PostsReducer,
  auth:AuthReducer
})
export const store = createStore(reducers, composeEnhancers(middleware));
