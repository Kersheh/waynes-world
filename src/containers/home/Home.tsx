import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types';
import AlbumTile from './albumTile/AlbumTile';
import styles from './Home.module.scss';

const HomeContainer = () => {
  const { albums } = useSelector((state: RootState) => state.library);

  return (
    <div className={styles.home}>
      <h2>Recently added</h2>

      <div className={styles.albumScroll}>
        {albums.map((album, index) => (
          <AlbumTile
            album={album.album}
            artist={album.artist}
            key={`${album.album}-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
