import axios from '../api';

/* export const getUserPlayRecord = uid => axios.get('/user/record', {
  params: {
    uid,
    type: 1,
  },
}); */

// 加random的作用是使得get请求不走缓存。
export const getUserLikelist = uid => axios.get('/likelist', {
  params: {
    uid,
    random: Math.random(),
  },
  withCredentials: true,
});

export const getUserPlaylist = uid => axios.get('/user/playlist', {
  params: {
    uid,
  },
});
