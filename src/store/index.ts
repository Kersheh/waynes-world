import {
  createStore,
  applyMiddleware,
  compose,
  Reducer,
  Middleware
} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

import rootReducer from './reducers';
import rootSaga from './sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  let middleware: Array<Middleware> = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, createLogger({ collapsed: true })];
  }

  const store = createStore(
    persistReducer(
      {
        key: 'root',
        storage: localStorage
      },
      rootReducer as Reducer
    ),
    composeEnhancers(applyMiddleware(...middleware))
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
};

export default configureStore;
