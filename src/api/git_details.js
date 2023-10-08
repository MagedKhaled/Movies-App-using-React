import axios from 'axios';

export const gitDetailsApi = (movieId, apiKey) => {
  return axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  });
};



