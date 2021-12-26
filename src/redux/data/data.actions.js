// Actions
import {
  FETCH_POPULAR_MOVIES_START,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
  FETCH_TRENDING_MOVIES_START,
  FETCH_TRENDING_MOVIES_SUCCESS,
  FETCH_TRENDING_MOVIES_FAILURE,
} from './actions.types';

export const fetchTrendingMoviesStart = () => {
  return {
    type: FETCH_TRENDING_MOVIES_START,
  };
};

export const fetchTrendingMoviesSuccess = movies => {
  return {
    type: FETCH_TRENDING_MOVIES_SUCCESS,
    movies,
  };
};

export const fetchTrendingMoviesFailure = error => {
  return {
    type: FETCH_TRENDING_MOVIES_FAILURE,
    error,
  };
};

export const fetchPopularMoviesStart = () => {
  return {
    type: FETCH_POPULAR_MOVIES_START,
  };
};

export const fetchPopularMoviesSuccess = movies => {
  return {
    type: FETCH_POPULAR_MOVIES_SUCCESS,
    movies,
  };
};

export const fetchPopularMoviesFailure = error => {
  return {
    type: FETCH_POPULAR_MOVIES_FAILURE,
    error,
  };
};
