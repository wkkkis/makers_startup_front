import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://34.125.134.11'
})