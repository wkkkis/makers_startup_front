import { SET_USER_EMAIL, SET_USER_STATUS, SET_USER_USERNAME } from '../../utils/const';
import { authAPI } from '../../api/authApi';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const setUserEmail = email => ({ type: SET_USER_EMAIL, payload: email })
export const setUserUserName = username => ({ type: SET_USER_USERNAME, payload: username })
export const setUserStatus = status => ({ type: SET_USER_STATUS, payload: status })

export const userLogin = ({email, password}) => async dispatch => {
  console.log('from actions', email, password)
  // debugger
  try {
    // let response = await authAPI.login(email, password)
    let {data} = await axios.post('http://34.125.134.11/account/login/', {
      email: email,
      password: password
    })
    if(data.access){
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
      const user = jwt_decode(data.access);
    }
    console.log(data);
  } catch (e) {
    console.log(e)
  }
}