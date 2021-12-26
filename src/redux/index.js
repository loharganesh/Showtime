import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';

// Root Reducer
import {rootReducer} from './root-reducer';
import {rootSaga} from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
