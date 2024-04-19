import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: '/ttb/api/',
  params: {
    TTBKey: API_KEY,
    output: 'js',
    Version: '20131101',
    Cover: 'Big'
  }
});

export default api;
