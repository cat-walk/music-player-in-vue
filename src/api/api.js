import axios from 'axios';

// axios.defaults.baseURL = ' http://localhost:3000/';
axios.defaults.baseURL = ' https://meiyun.info:3000/';
axios.interceptors.response.use(response => response.data, err => Promise.reject(err.response.data));

export default axios;
