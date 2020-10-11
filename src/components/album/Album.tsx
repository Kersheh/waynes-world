import React from 'react';

import Button from 'components/button/Button';
import styles from './Album.module.scss';

interface AlbumProps {
  title: string;
  artist: string;
  // id?: string;
  // src?: any; // TODO
}
const Album = ({ title, artist }: AlbumProps) => {
  return (
    <Button styleType="album">
      <div className={styles.album}>
        <div className={styles.art} />

        <div className={styles.tag}>
          <div className={styles.title}>{title}</div>
          <div className={styles.artist}>{artist}</div>
        </div>
      </div>
    </Button>
  );
};

export default Album;
