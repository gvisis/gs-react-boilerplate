import { createReducer } from '@reduxjs/toolkit';

import { actions } from '../actions';

export interface AppReducerState {
  testState: boolean;
  isSagaClicked: string;
}

const INITIAL_STATE: AppReducerState = {
  testState: false,
  isSagaClicked: 'saga not clicked',
};

export const appReducer = createReducer(INITIAL_STATE, {
  [actions.app.setTestAction.type]: (state, { payload }) => {
    state.testState = payload;
  },
  [actions.app.setSagaClick.type]: (state, { payload }) => {
    state.isSagaClicked = payload;
  },
});
