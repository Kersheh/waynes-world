import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import configureStore from 'store';
import NavHeader from 'components/navHeader/NavHeader';
import NavFooter from 'components/navFooter/NavFooter';
import ContentView from './contentView/ContentView';

import styles from './App.module.scss';

const { store, persistor } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={styles.app}>
          <NavHeader />

          <div className={styles.layout}>
            <ContentView />
          </div>

          <div className={styles.footer}>
            <NavFooter />
          </div>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
