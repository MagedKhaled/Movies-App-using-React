import axios from 'axios';

export const recomApi = (id, apiKey) => {
  return axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`
  });
};





