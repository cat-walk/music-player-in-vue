import axios from 'axios';

// axios.defaults.baseURL = ' http://localhost:3000/';
axios.defaults.baseURL = ' http://meiyun.info:3000/';
axios.interceptors.response.use(res => res.data, err => Promise.reject(err.response.data));

export default axios;
