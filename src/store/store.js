import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { authReducer, productReducer } from './reducers';

let reducer = combineReducers({
  authReducer,
  productReducer
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store;