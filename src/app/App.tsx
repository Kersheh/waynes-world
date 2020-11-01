import React, { useEffect } from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { RootState } from 'types';
import configureStore from 'store';
import NavFooter from 'components/navFooter/NavFooter';
import Spinner from 'components/spinner/Spinner';
import { getLibraryAction } from 'containers/library/libraryActions';
import ContentView from './contentView/ContentView';

import styles from './App.module.scss';

const { store, persistor } = configureStore();

const AppLoadingOverlay = () => {
  const dispatch = useDispatch();
  const { appLoading } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    dispatch(getLibraryAction());
  }, [dispatch]);

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
