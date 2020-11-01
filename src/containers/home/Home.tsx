import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types';
import AlbumTile from './albumTile/AlbumTile';
import styles from './Home.module.scss';

const HomeContainer = () => {
  const { recentlyAddedAlbums } = useSelector(
    (state: RootState) => state.library
  );

  return (
    <div className={styles.home}>
      <h2>Recently added</h2>

      {recentlyAddedAlbums.length === 0 && (
        <p>No recently added albums found.</p>
      )}

      <div className={styles.albumScroll}>
        {recentlyAddedAlbums?.map(
          (album, index) =>
            !(index % 2) && (
              <AlbumTile
                album={album.album}
                artist={album.artist}
                id={album.id}
                key={`${album.album}-${index}`}
              />
            )
        )}
      </div>

      <div className={styles.albumScroll}>
        {recentlyAddedAlbums?.map(
          (album, index) =>
            !!(index % 2) && (
              <AlbumTile
                album={album.album}
                artist={album.artist}
                id={album.id}
                key={`${album.album}-${index}`}
              />
            )
        )}
      </div>
    </div>
  );
};

export default HomeContainer;
