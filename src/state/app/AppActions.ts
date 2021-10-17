import { createAction } from '@reduxjs/toolkit';

import { constants } from '../constants';

export const setTestAction = createAction<boolean>(
  constants.app.SET_TEST_ACTION,
);

export const checkSagaClick = createAction(constants.app.CHECK_SAGA_CLICK);

export const setSagaClick = createAction<string>(constants.app.SET_SAGA_CLICK);
