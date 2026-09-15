import {
  applyMiddleware,
  legacy_createStore as createStore,
  type AnyAction,
  type Middleware,
  type Reducer,
  type StoreEnhancer,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { type RootState } from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];

export const store = createStore(
  rootReducer as unknown as Reducer<RootState, AnyAction>,
  applyMiddleware(...middlewares) as StoreEnhancer,
);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
