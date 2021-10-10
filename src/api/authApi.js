import { instance } from './api';

export const authAPI = {
  login(email, password){
    debugger
    return instance.post(`/account/login/`, {email, password})
      .then(res => res.data)
  },
  refresh(refresh) {
    return instance.post(`/account/token/refresh/`, {refresh})
      .then(res => res.data)
  }
}