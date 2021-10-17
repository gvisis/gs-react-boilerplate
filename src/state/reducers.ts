import { AnyAction, CombinedState, combineReducers } from 'redux';

import { appReducer, AppReducerState } from './app/AppReducer';

export interface RootState {
  app: AppReducerState;
}

const combinedReducers = combineReducers<CombinedState<RootState>>({
  app: appReducer,
});

export const rootReducer = (state: RootState | undefined, action: AnyAction) =>
  combinedReducers(state, action);
