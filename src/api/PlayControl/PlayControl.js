import axios from '../api';

export const getMusicUrl = musicId => axios.get('/song/url', {
  params: {
    id: musicId,
  },
  withCredentials: true,
});

export const toggleStarTheSong = (musicId, like) => axios.get('/like', {
  params: {
    id: musicId,
    like,
  },
  withCredentials: true,
});
