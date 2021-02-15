import { request } from './api';

export const getMovies = async() => request('/list');

export const getMovieDetails = async movieId => request(`/list/${movieId}`);