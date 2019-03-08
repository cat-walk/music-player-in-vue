import axios from 'axios';

axios.defaults.baseURL = ' http://localhost:3000/';
axios.interceptors.response.use(response => response.data, (error) => {});

export default axios;
