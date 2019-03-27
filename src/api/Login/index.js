import axios from '../api';

export const login = (phone, password) => axios.get('/login/cellphone', {
  params: {
    phone,
    password,
  },
});
