import createSagaMiddleware, { SagaMiddleware, SagaMonitor } from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';

import { rootSaga } from './sagas';
import { rootReducer, RootState } from './reducers';
import storeRegistry from '../utils/redux/storeRegistry';

export const configStore = (initialState?: RootState) => {
  const sagaMiddleware: SagaMiddleware<SagaMonitor> = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);

  return { store };
};

storeRegistry.register({ store: configStore() });
