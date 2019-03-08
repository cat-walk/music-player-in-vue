import axios from '../api';

/**
 * 获取主页轮播图的api
 *
 */
export const getBanner = () => axios.get('/banner');
