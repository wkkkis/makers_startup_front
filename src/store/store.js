import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { authReducer, productReducer, categoriesReducer } from './reducers';

let reducer = combineReducers({
  authReducer,
  productReducer,
  categoriesReducer
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware))

export default store;