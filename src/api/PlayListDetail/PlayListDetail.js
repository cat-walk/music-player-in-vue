import axios from '../api';

export const getPlayListDetail = id => axios.get('/playlist/detail', {
  params: {
    id,
    random: Math.random(),
  },
});
