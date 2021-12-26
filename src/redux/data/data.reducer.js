// Actions
import {
  FETCH_POPULAR_MOVIES_START,
  FETCH_POPULAR_MOVIES_SUCCESS,
  FETCH_POPULAR_MOVIES_FAILURE,
  FETCH_TRENDING_MOVIES_START,
  FETCH_TRENDING_MOVIES_SUCCESS,
  FETCH_TRENDING_MOVIES_FAILURE,
} from './actions.types';

// INITIAL_STATE
const INITIAL_STATE = {
  trendingMovies: [],
  popularMovies: [],
  fetchingTrendingMovies: true,
  fetchingPopularMovies: true,
};

export const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TRENDING_MOVIES_START:
      return {...state, fetchingMovies: true};

    case FETCH_TRENDING_MOVIES_SUCCESS:
      return {
        ...state,
        fetchingTrendingMovies: false,
        trendingMovies: action.movies,
      };

    case FETCH_TRENDING_MOVIES_FAILURE:
      return {...state, fetchingTrendingMovies: false, trendingMovies: []};

    case FETCH_POPULAR_MOVIES_START:
      return {...state, fetchingMovies: true};

    case FETCH_POPULAR_MOVIES_SUCCESS:
      return {
        ...state,
        fetchingTrendingMovies: false,
        popularMovies: action.movies,
      };

    case FETCH_POPULAR_MOVIES_FAILURE:
      return {...state, fetchingTrendingMovies: false, popularMovies: []};

    default:
      return state;
  }
};
