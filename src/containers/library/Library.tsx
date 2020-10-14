import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'types';
import { getLibraryAction } from './libraryActions';

import styles from './Library.module.scss';

const LibraryContainer = () => {
  const dispatch = useDispatch();
  const { albums } = useSelector((state: RootState) => state.library);

  useEffect(() => {
    dispatch(getLibraryAction());
  }, [dispatch]);

  return (
    <div className={styles.library}>
      Library
      <pre>{JSON.stringify(albums, null, 2)}</pre>
    </div>
  );
};

export default LibraryContainer;
