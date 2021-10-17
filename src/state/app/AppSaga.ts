import { put, select, takeEvery } from 'redux-saga/effects';

import { actions } from '../actions';

function* handleCheckSagaClick() {
  const stateClickstate: boolean = yield select(state => state.app.testState);

  try {
    if (stateClickstate) {
      yield put(actions.app.setSagaClick('clicked'));
    } else {
      yield put(actions.app.setSagaClick('not clicked'));
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(actions.app.setTestAction(!stateClickstate));
  }
}

export function* appSaga() {
  yield takeEvery(actions.app.checkSagaClick, handleCheckSagaClick);
}
