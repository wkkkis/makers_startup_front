import { instance } from './api';

import axios from 'axios';

export const authAPI = {
  login(email, password){
    console.log('login from authAPI', email, password);
    // debugger
    return axios.post("http://34.125.134.11/account/login/", {email:email, password:password})
    // return instance.post(`/account/login/`, {email, password})
    //   .then(res => res.data)
  },
  refresh(refresh) {
    return instance.post(`/account/token/refresh/`, {refresh})
      .then(res => res.data)
  }
}