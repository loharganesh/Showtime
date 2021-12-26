import {takeLatest, call, all} from 'redux-saga/effects';

// Acion Types
import {
  FETCH_POPULAR_MOVIES_START,
  FETCH_TRENDING_MOVIES_START,
} from './actions.types';

// Worker Sagas
import {
  handleFetchPopularMoviesStart,
  handleFetchTrendingMoviesStart,
} from './data.worker-sagas';

// Watcher Sagas

export function* watchHandleTrendingMoviesStart() {
  yield takeLatest(FETCH_TRENDING_MOVIES_START, handleFetchTrendingMoviesStart);
}

export function* watchHandlePopularMoviesStart() {
  yield takeLatest(FETCH_POPULAR_MOVIES_START, handleFetchPopularMoviesStart);
}

export function* dataSagas() {
  yield all([
    call(watchHandleTrendingMoviesStart),
    call(watchHandlePopularMoviesStart),
  ]);
}
