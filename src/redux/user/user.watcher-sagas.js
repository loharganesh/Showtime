import {takeLatest, call, all} from 'redux-saga/effects';

// Acion Types
import {CREATE_USER_START, LOGIN_START} from './actions.types';

// Worker Sagas
import {handleLoginStart, handleCreateUserStart} from './user.worker-sagas';

// Watcher Sagas

export function* watchHandleCreateUserStart() {
  yield takeLatest(CREATE_USER_START, handleCreateUserStart);
}

export function* watchHandleLoginStart() {
  yield takeLatest(LOGIN_START, handleLoginStart);
}

export function* userSagas() {
  yield all([call(watchHandleCreateUserStart), call(watchHandleLoginStart)]);
}
