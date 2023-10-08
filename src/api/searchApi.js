import axios from 'axios';

export const searchApi = (movieName, apiKey) => {
  return axios.create({
    baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`
  });
};





