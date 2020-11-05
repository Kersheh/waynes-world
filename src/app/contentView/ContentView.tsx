import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'types';
import Home from 'containers/home/Home';
import AddAlbum from 'containers/addAlbum/AddAlbum';
import Library from 'containers/library/Library';
import Error from 'containers/error/Error';
import styles from './ContentView.module.scss';

const ContentView = () => {
  const dispatch = useDispatch();
  const { activeView } = useSelector((state: RootState) => state.app);
  const { message } = useSelector((state: RootState) => state.error);

  // debug; reset store
  if (false) {
    dispatch({ type: 'PURGE', key: 'root', result: () => null })
  }

  return (
    <div className={styles.contentView}>
      {activeView === 'home' && <Home />}
      {activeView === 'addAlbum' && <AddAlbum />}
      {activeView === 'library' && <Library />}

      {message && <Error message={message} />}
    </div>
  );
};

export default ContentView;
