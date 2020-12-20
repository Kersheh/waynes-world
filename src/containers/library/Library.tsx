import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import { RootState, Album } from 'types';
import Button from 'components/button/Button';
import { getLibraryAction, clearAlbumViewAction } from './libraryActions';
import AlbumView from './albumView/AlbumView';
import LibraryAlbum from './libraryAlbum/LibraryAlbum';
import styles from './Library.module.scss';

const cx = classNames.bind(styles);

const LibraryContainer = () => {
  const dispatch = useDispatch();
  const { albums, activeAlbumId } = useSelector(
    (state: RootState) => state.library
  );
  const [sortBy, setSortBy] = useState('artist');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    if (!activeAlbumId) {
      dispatch(getLibraryAction());
    }

    // clear album view on library exit
    return () => {
      dispatch(clearAlbumViewAction());
    };
  }, [dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!activeAlbumId) {
      dispatch(
        getLibraryAction({
          sortBy,
          sortOrder
        })
      );
    }
  }, [dispatch, sortBy, sortOrder]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={cx({
        library: true,
        main: !activeAlbumId
      })}
    >
      {activeAlbumId && (
        <AlbumView
          album={
            albums.find(album => album.id === activeAlbumId) ?? ({} as Album)
          }
        />
      )}
      {!activeAlbumId && (
        <>
          <Button onClick={() => setSortBy('artist')}>Artist</Button>
          <Button onClick={() => setSortBy('album')}>Album</Button>
          <Button onClick={() => setSortBy('genre')}>Genre</Button>
          <Button onClick={() => setSortBy('createdAt')}>Date Added</Button>
          <Button onClick={() => setSortOrder('asc')}>Asc</Button>
          <Button onClick={() => setSortOrder('desc')}>Desc</Button>

          {albums?.map((album, index) => (
            <LibraryAlbum
              id={album.id}
              album={album.album}
              artist={album.artist}
              key={`${album.album}-${index}`}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default LibraryContainer;
