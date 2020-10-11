import React from 'react';
import { useSelector, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { RootState } from 'types';
import configureStore from 'store';
import NavFooter from 'components/navFooter/NavFooter';
import Spinner from 'components/spinner/Spinner';
import ContentView from './contentView/ContentView';

import styles from './App.module.scss';

const { store, persistor } = configureStore();

const AppLoadingOverlay = () => {
  const { appLoading } = useSelector((state: RootState) => state.app);
  return <Spinner show={appLoading} />;
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={styles.app}>
          <AppLoadingOverlay />

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
