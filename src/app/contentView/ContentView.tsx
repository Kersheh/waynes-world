import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'types';
import Button from 'components/button/Button';
import Home from 'containers/home/Home';
import AddAlbum from 'containers/addAlbum/AddAlbum';
import Library from 'containers/library/Library';
import Error from 'containers/error/Error';
import styles from './ContentView.module.scss';

const ContentView = () => {
  const dispatch = useDispatch();
  const { activeView } = useSelector((state: RootState) => state.app);
  const { message } = useSelector((state: RootState) => state.error);

  return (
    <div className={styles.contentView}>
      {false && (
        <div className={styles.resetBtn}>
          <Button
            onClick={() =>
              dispatch({ type: 'PURGE', key: 'root', result: () => null })
            }
          >
            @
          </Button>
        </div>
      )}

      {activeView === 'home' && <Home />}
      {activeView === 'addAlbum' && <AddAlbum />}
      {activeView === 'library' && <Library />}

      {message && <Error message={message} />}
    </div>
  );
};

export default ContentView;
