import React from 'react';

import AlbumTile from 'components/albumTile/AlbumTile';
import styles from './Home.module.scss';

const HomeContainer = () => {
  const recentAlbums = [
    {
      title: 'Drive Slow',
      artist: 'Mac Ayres'
    },
    {
      title: 'Freudian',
      artist: 'Daniel Caesar'
    },
    {
      title: 'These Days',
      artist: 'Manwolves'
    },
    {
      title: 'Lonerism',
      artist: 'Tame Impala'
    },
    {
      title: 'Nectar',
      artist: 'Joji'
    }
  ];

  return (
    <div className={styles.home}>
      <h2>Recently added</h2>

      <div className={styles.albumScroll}>
        {recentAlbums.map(album => (
          <AlbumTile
            title={album.title}
            artist={album.artist}
            key={album.title}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeContainer;
