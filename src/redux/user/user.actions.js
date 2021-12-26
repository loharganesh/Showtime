import {
  LOGIN_START,
  CREATE_USER_START,
  SET_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CREATE_USER_FAILURE,
  CREATE_USER_SUCCESS,
  LOGOUT,
} from './actions.types';

export const startLogin = (email, password) => {
  return {
    type: LOGIN_START,
    credentials: {
      email,
      password,
    },
  };
};

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};

export const startCreateUser = user => {
  return {
    type: CREATE_USER_START,
    user,
  };
};

export const createUserSuccess = user => {
  return {
    type: CREATE_USER_SUCCESS,
    user,
  };
};

export const createUserFailure = error => {
  return {
    type: CREATE_USER_FAILURE,
    error,
  };
};

export const setUser = user => {
  return {
    type: SET_USER,
    user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
