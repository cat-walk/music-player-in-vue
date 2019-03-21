import axios from '../api';

export const getSearchResult = userInput => axios.get(`/search?keywords=${userInput}`);
