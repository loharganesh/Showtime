import {put, call} from 'redux-saga/effects';

// Requests
import {
  createUser,
  loginUser,
  logoutUser,
} from '../../api-calls/user.api-calls';
import {
  loginSuccess,
  loginFailure,
  createUserSuccess,
  createUserFailure,
} from './user.actions';

// User
export function* handleLoginStart({credentials: {email, password}}) {
  try {
    const response = yield call(loginUser, email, password);
    yield put(loginSuccess(response));
  } catch (e) {
    yield put(loginFailure(e));
  }
}

export function* handleCreateUserStart({user}) {
  try {
    const response = yield call(createUser, user);
    yield put(createUserSuccess(response));
  } catch (e) {
    yield put(createUserFailure(e));
  }
}

export function* handleLogout() {
  try {
    yield call(logoutUser);
  } catch (e) {}
}
