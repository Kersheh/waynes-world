import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';

import { RootState, Album } from 'types';
import Button from 'components/button/Button';
import IconArrowUp from 'components/icons/IconArrowUp';
import IconArrowDown from 'components/icons/IconArrowDown';
import { getLibraryAction, clearAlbumViewAction } from './libraryActions';
import AlbumView from './albumView/AlbumView';
import LibraryAlbum from './libraryAlbum/LibraryAlbum';
import LibraryFilter from './libraryFilter/LibraryFilter';
import styles from './Library.module.scss';

const cx = classNames.bind(styles);

const LibraryContainer = () => {
  const dispatch = useDispatch();
  const { albums, activeAlbumId } = useSelector(
    (state: RootState) => state.library
  );
  const [sortBy, setSortBy] = useState('artist');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterQuery, setFilterQuery] = useState<string>('');

  useEffect(() => {
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

  // reset search filter when leaving album view
  useEffect(() => {
    if (!activeAlbumId) {
      setFilterQuery('');
    }
  }, [activeAlbumId]);

  // filter albums by artist or album from user filter search
  const albumsFiltered = useMemo(
    () =>
      !filterQuery
        ? albums
        : albums.filter(
            album =>
              album.artist.toLowerCase().includes(filterQuery) ||
              album.album.toLowerCase().includes(filterQuery)
          ),
    [filterQuery, albums]
  );

  const setSort = (by: 'artist' | 'album' | 'genre' | 'createdAt') => {
    if (sortBy !== by) {
      setSortBy(by);
      setSortOrder('asc');
    } else {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }
  };

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
          <LibraryFilter setFilterQuery={setFilterQuery} />

          <div className={styles.sortBtns}>
            <Button onClick={() => setSort('artist')}>
              <span>Artist</span>
              {sortBy === 'artist' && (
                <>{sortOrder === 'asc' ? <IconArrowUp /> : <IconArrowDown />}</>
              )}
            </Button>
            <Button onClick={() => setSort('album')}>
              <span>Album</span>
              {sortBy === 'album' && (
                <>{sortOrder === 'asc' ? <IconArrowUp /> : <IconArrowDown />}</>
              )}
            </Button>
            <Button onClick={() => setSort('genre')}>
              <span>Genre</span>
              {sortBy === 'genre' && (
                <>{sortOrder === 'asc' ? <IconArrowUp /> : <IconArrowDown />}</>
              )}
            </Button>
            <Button onClick={() => setSort('createdAt')}>
              <span>Date Added</span>
              {sortBy === 'createdAt' && (
                <>{sortOrder === 'asc' ? <IconArrowUp /> : <IconArrowDown />}</>
              )}
            </Button>
          </div>

          {albumsFiltered?.map((album, index) => (
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
