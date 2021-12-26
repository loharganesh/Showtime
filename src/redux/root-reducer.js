import {combineReducers} from 'redux';

// Reducers
import {userReducer} from './user/user.reducer';
import {dataReducer} from './data/data.reducer';

export const rootReducer = combineReducers({userReducer, dataReducer});
