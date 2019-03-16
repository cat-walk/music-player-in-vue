import axios from '../api';

export const getMusicUrl = musicId => axios.get('/song/url', {
  params: {
    id: musicId,
  },
});
