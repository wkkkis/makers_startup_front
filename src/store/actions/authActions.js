import { SET_USER_EMAIL, SET_USER_STATUS, SET_USER_USERNAME } from '../../utils/const';
import { authAPI } from '../../api/authApi';

import axios from 'axios';

export const setUserEmail = email => ({ type: SET_USER_EMAIL, payload: email })
export const setUserUserName = username => ({ type: SET_USER_USERNAME, payload: username })
export const setUserStatus = status => ({ type: SET_USER_STATUS, payload: status })

export const userLogin = ({email, password}) => async dispatch => {
  console.log('from actions', email, password)
  // debugger
  try {
    // let response = await authAPI.login(email, password)
    let response = await axios.post('http://34.125.134.11/account/login/', {
      email: 'admin@admin.com',
      password: "admin123"
    })
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}