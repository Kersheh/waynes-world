import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { clearSearchQueryAction } from './addAlbumActions';
import Search from './search/Search';
import styles from './AddAlbum.module.scss';

const AddAlbumContainer = () => {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    dispatch(clearSearchQueryAction());
  }, [dispatch]);

  return (
    <div className={styles.addAlbum}>
      <h2>Search to add new album</h2>

      <Search showSearch={showSearch} setShowSearch={setShowSearch} />
    </div>
  );
};

export default AddAlbumContainer;
