import axios from '../api';

export const logout = () => axios.get('/logout', {
  withCredentials: true,
  params: {
    random: Math.random(),
  },
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
