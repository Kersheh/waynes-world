import React from 'react';

import Button from 'components/button/Button';
import styles from './AlbumTile.module.scss';

interface AlbumTileProps {
  title: string;
  artist: string;
  // id?: string;
  // src?: any; // TODO
}
const AlbumTile = ({ title, artist }: AlbumTileProps) => {
  return (
    <Button styleType="tile">
      <div className={styles.albumTile}>
        <div className={styles.art} />

        <div className={styles.tag}>
          <div className={styles.title}>{title}</div>
          <div className={styles.artist}>{artist}</div>
        </div>
      </div>
    </Button>
  );
};

export default AlbumTile;
