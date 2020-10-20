import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'types';
import Button from 'components/button/Button';
import IconPlusOutline from 'components/icons/IconPlusOutline';
import {
  clearSearchQueryAction,
  clearEditAlbumViewStateAction
} from './addAlbumActions';
import Search from './search/Search';
import EditAlbum from './editAlbum/EditAlbum';
import styles from './AddAlbum.module.scss';

const AddAlbumContainer = () => {
  const dispatch = useDispatch();
  const { openEditAlbumView } = useSelector(
    (state: RootState) => state.addAlbum
  );
  const [showSearch, setShowSearch] = useState(false);
  const [showEditAlbum, setShowEditAlbum] = useState(false);

  useEffect(() => {
    dispatch(clearSearchQueryAction());
  }, [dispatch]);

  useEffect(() => {
    if (openEditAlbumView) {
      setShowEditAlbum(true);
    }
  }, [openEditAlbumView]);

  useEffect(() => {
    if (!showEditAlbum) {
      dispatch(clearEditAlbumViewStateAction());
    }
  }, [dispatch, showEditAlbum]);

  return (
    <div className={styles.addAlbum}>
      {!showEditAlbum && (
        <>
          <h2>Search to add new album</h2>
          <Search showSearch={showSearch} setShowSearch={setShowSearch} />

          <div className={styles.altText}>
            <h3>or</h3>
          </div>

          <h2>Manually add new album information</h2>
          <div className={styles.createAlbumBtn}>
            <IconPlusOutline />

            <Button
              type="button"
              styleType="basic"
              onClick={() => setShowEditAlbum(true)}
            >
              Create new album
            </Button>
          </div>
        </>
      )}

      {showEditAlbum && (
        <>
          <EditAlbum setShowEditAlbum={setShowEditAlbum} />
        </>
      )}
    </div>
  );
};

export default AddAlbumContainer;
