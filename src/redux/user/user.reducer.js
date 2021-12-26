// Actions
import {
  SET_USER,
  SET_CHECKING_AUTH,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  CREATE_USER_START,
  LOGOUT,
} from './actions.types';

// INITIAL_STATE
const INITIAL_STATE = {
  user: null,
  logingIn: false,
  checkingAuth: true,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {...state, user: action.user};

    case SET_CHECKING_AUTH:
      return {...state, checkingAuth: isChecking};

    case LOGIN_START:
    case CREATE_USER_START:
      return {...state, logingIn: true, error: null};

    case LOGIN_SUCCESS:
    case CREATE_USER_SUCCESS:
      return {...state, user: action.user, logingIn: false, error: null};

    case LOGIN_FAILURE:
    case CREATE_USER_FAILURE:
      return {...state, logingIn: false, error: action.error, user: null};

    case LOGOUT:
      return {...state, logingIn: false, error: false, user: null};

    default:
      return state;
  }
};
