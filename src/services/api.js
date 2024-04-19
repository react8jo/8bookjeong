import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://www.aladin.co.kr/ttb/api' // 운영 환경에서 사용할 API의 기본 URL
    : '/ttb/api'; // 개발 환경에서 사용할 API의 기본 URL
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    TTBKey: API_KEY,
    output: 'js',
    Version: '20131101',
    Cover: 'Big'
  }
});

export default api;
