import axios from 'axios';
export const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?'
})

axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
