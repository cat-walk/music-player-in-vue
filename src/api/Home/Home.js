import axios from '../api';

/**
 * 获取主页轮播图的api
 *
 */
export const getBanner = () => axios.get('/banner');

/**
 * 获取主页推荐歌单的api
 *
 */
export const getRecommendSongList = () => axios.get('/personalized');
