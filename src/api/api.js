import axios from 'axios';

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://34.125.134.11'
})