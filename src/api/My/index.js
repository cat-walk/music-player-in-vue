import axios from '../api';

export const getUserPlayRecord = uid => axios.get('/user/record', {
  params: {
    uid,
    type: 1,
  },
});

export const getUserLikelist = uid => axios.get('/likelist', {
  params: {
    uid,
  },
  withCredentials: true,
});

export const getUserPlaylist = uid => axios.get('/user/playlist', {
  params: {
    uid,
  },
  // withCredentials: true,
});
