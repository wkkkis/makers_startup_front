import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

let reducer = combineReducers({})

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store;