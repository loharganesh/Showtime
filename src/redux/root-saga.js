import {all, call} from 'redux-saga/effects';

// Sagas
import {dataSagas} from './data/data.watcher-sagas';
import {userSagas} from './user/user.watcher-sagas';

export function* rootSaga() {
  yield all([call(userSagas), call(dataSagas)]);
}
