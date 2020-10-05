import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, Reducer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { render } from '@testing-library/react';

import rootReducer from 'store/reducers';
import rootSaga from 'store/sagas';

const renderWithStore = (component: React.ReactElement) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer as Reducer,
    compose(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);

  return render(<Provider store={store}>{component}</Provider>);
};

export default renderWithStore;
