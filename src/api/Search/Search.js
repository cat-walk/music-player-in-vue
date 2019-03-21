import axios from '../api';

export const getHotSearch = () => axios.get('/search/hot');
