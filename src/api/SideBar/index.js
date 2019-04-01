// 由于后台接口不稳定，因此不用发请求的方式来进行获取登录状态和退出登录
import axios from '../api';

export const logout = () => axios.get('/logout', {
  withCredentials: true,
});

export const getLoginStatus = () => axios.get('/login/status', {
  withCredentials: true,
  params: {
    random: Math.random(),
  },
});

export const getUserDetail = uid => axios.get('/user/detail', {
  params: {
    uid,
  },
});
