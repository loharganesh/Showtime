import {put, call} from 'redux-saga/effects';

// Requests
import {
  getTrendingMovies,
  getPopularMovies,
} from '../../api-calls/data.api-calls';
import {
  fetchPopularMoviesSuccess,
  fetchTrendingMoviesSuccess,
  fetchTrendingMoviesFailure,
  fetchPopularMoviesFailure,
} from './data.actions';

// User
export function* handleFetchTrendingMoviesStart() {
  try {
    const response = yield call(getTrendingMovies);

    yield put(fetchTrendingMoviesSuccess(response));
  } catch (e) {
    yield put(fetchTrendingMoviesFailure(e));
  }
}

export function* handleFetchPopularMoviesStart() {
  try {
    const response = yield call(getPopularMovies);

    yield put(fetchPopularMoviesSuccess(response));
  } catch (e) {
    yield put(fetchPopularMoviesFailure(e));
  }
}
