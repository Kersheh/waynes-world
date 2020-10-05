import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types';
import styles from './ContentView.module.scss';

const ContentView = () => {
  const { activeView } = useSelector((state: RootState) => state.app);

  return (
    <div className={styles.contentView}>
      <h1>{activeView}</h1>
    </div>
  );
};

export default ContentView;
