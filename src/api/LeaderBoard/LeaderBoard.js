import axios from '../api';

export const getToplistDetail = () => axios.get('/toplist/detail');
