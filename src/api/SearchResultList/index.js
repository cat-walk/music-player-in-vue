import axios from '../api';

export const getCoverImgUrl = albumId => axios.get(`/album?id=${albumId}`);
