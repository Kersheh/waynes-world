import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'types';
import Button from 'components/button/Button';
import Home from 'containers/home/Home';
import Search from 'containers/search/Search';
import Library from 'containers/library/Library';
import styles from './ContentView.module.scss';

const ContentView = () => {
  const dispatch = useDispatch();
  const { activeView } = useSelector((state: RootState) => state.app);

  return (
    <div className={styles.contentView}>
      <div className={styles.resetBtn}>
        <Button
          onClick={() =>
            dispatch({ type: 'PURGE', key: 'root', result: () => null })
          }
        >
          @
        </Button>
      </div>

      {activeView === 'home' && <Home />}
      {activeView === 'search' && <Search />}
      {activeView === 'library' && <Library />}
    </div>
  );
};

export default ContentView;
