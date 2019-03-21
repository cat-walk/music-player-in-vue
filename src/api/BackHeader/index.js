import axios from '../api';

export const getSearchSuggestions = userInput => axios.get(`/search/suggest?keywords=${userInput}&type=mobile`);
