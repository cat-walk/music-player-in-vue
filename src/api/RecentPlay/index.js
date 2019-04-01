import axios from '../api';

export const getSongDetail = ids => axios.get('/song/detail', {
  params: {
    ids,
  },
});
