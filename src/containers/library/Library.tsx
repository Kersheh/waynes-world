import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, Album } from 'types';
import { getLibraryAction } from './libraryActions';
import AlbumView from './albumView/AlbumView';
import LibraryAlbum from './libraryAlbum/LibraryAlbum';
import styles from './Library.module.scss';

const LibraryContainer = () => {
  const dispatch = useDispatch();
  const { albums, activeAlbumId } = useSelector(
    (state: RootState) => state.library
  );

  useEffect(() => {
    dispatch(getLibraryAction());
  }, [dispatch]);

  return (
    <div className={styles.library}>
      {activeAlbumId && (
        <AlbumView
          album={
            albums.find(album => album.id === activeAlbumId) ?? ({} as Album)
          }
        />
      )}
      {!activeAlbumId && (
        <>
          {albums.map(album => (
            <LibraryAlbum
              id={album.id}
              album={album.album}
              artist={album.artist}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default LibraryContainer;
