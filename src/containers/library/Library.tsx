import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { throttle, flatten } from 'lodash';
import fuzzysort from 'fuzzysort';

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

interface LibraryListProps {
  albums: Array<Album>;
  sortBy: 'artist' | 'album' | 'genre' | 'year';
}
const LibraryList = ({ albums, sortBy }: LibraryListProps) => {
  let sortSplit = '';

  return (
    <>
      {albums?.map((album, index) => {
        let sortMarker = false;
        switch (sortBy) {
          case 'artist':
            if (sortSplit !== album.artist.slice(0, 1).toUpperCase()) {
              sortSplit = album.artist.slice(0, 1).toUpperCase();
              sortMarker = true;
            }
            break;
          case 'album':
            if (sortSplit !== album.album.slice(0, 1).toUpperCase()) {
              sortSplit = album.album.slice(0, 1).toUpperCase();
              sortMarker = true;
            }
            break;
          case 'genre':
            if (sortSplit !== album.genre?.toUpperCase()) {
              sortSplit = album.genre?.toUpperCase() ?? '';
              sortMarker = true;
            }
            break;
          case 'year':
            if (sortSplit !== album.year?.toString()) {
              sortSplit = album.year?.toString() ?? '';
              sortMarker = true;
            }
            break;
        }

        console.log(sortMarker);

        return (
          <div key={`${album.album}-${index}`}>
            {sortMarker && (
              <div className={styles.sortSplit}>
                <hr />
                <span>{sortSplit}</span>
              </div>
            )}
            <LibraryAlbum
              id={album.id}
              album={album.album}
              artist={album.artist}
              isFavourite={album.favourite}
            />
          </div>
        );
      })}
    </>
  );
};

const LibraryContainer = () => {
  const dispatch = useDispatch();
  const { albums, activeAlbumId } = useSelector(
    (state: RootState) => state.library
  );
  const [sortBy, setSortBy] = useState<'artist' | 'album' | 'genre' | 'year'>(
    'artist'
  );
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filterQuery, setFilterQuery] = useState<string>('');
  const [filterFavourite, setFilterFavourite] = useState(false);
  const setFilterQueryThrottled = useCallback(
    throttle((val: string) => setFilterQuery(val), 400),
    []
  );

  useEffect(() => {
    // clear album view on library exit
    return () => {
      dispatch(clearAlbumViewAction());
    };
  }, [dispatch]);

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
      setFilterFavourite(false);
    }
  }, [activeAlbumId]);

  const albumsFuzzySortTargets = useMemo(
    () =>
      flatten(
        albums.map(album => [
          {
            id: album.id,
            text: `${album.artist.toLowerCase()} ${album.album.toLowerCase()}`
          },
          {
            id: album.id,
            text: `${album.album.toLowerCase()} ${album.artist.toLowerCase()}`
          }
        ])
      ),
    [albums]
  );

  // filter albums by artist or album from user filter search, and filter by favourite if enabled
  const albumsFiltered = useMemo(() => {
    if (!filterQuery && filterFavourite) {
      return albums.filter(album => album.favourite);
    }
    if (filterQuery && !filterFavourite) {
      const filterAlbumIds = fuzzysort
        .go(filterQuery, albumsFuzzySortTargets, { keys: ['text'] })
        .map(item => item.obj.id);
      return albums.filter(album => filterAlbumIds.includes(album.id));
    }
    if (filterQuery && filterFavourite) {
      return albums.filter(
        album =>
          album.favourite &&
          (album.artist.toLowerCase().includes(filterQuery.toLowerCase()) ||
            album.album.toLowerCase().includes(filterQuery.toLowerCase()))
      );
    }
    return albums;
  }, [filterQuery, albums, filterFavourite, albumsFuzzySortTargets]);

  const setSort = (by: 'artist' | 'album' | 'genre' | 'year') => {
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
          <LibraryFilter
            setFilterQuery={setFilterQueryThrottled}
            filterFavourite={filterFavourite}
            setFilterFavourite={setFilterFavourite}
          />

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
            <Button onClick={() => setSort('year')}>
              <span>Year</span>
              {sortBy === 'year' && (
                <>{sortOrder === 'asc' ? <IconArrowUp /> : <IconArrowDown />}</>
              )}
            </Button>
          </div>

          {albumsFiltered?.length === 0 && <p>No albums found.</p>}

          <LibraryList albums={albumsFiltered} sortBy={sortBy} />
        </>
      )}
    </div>
  );
};

export default LibraryContainer;
