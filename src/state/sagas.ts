import { all, fork } from 'redux-saga/effects';

import { appSaga } from './app/AppSaga';

export function* rootSaga() {
  yield all([fork(appSaga)]);
}
