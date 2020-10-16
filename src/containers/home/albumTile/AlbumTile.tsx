import React from 'react';

import Button from 'components/button/Button';
import styles from './AlbumTile.module.scss';

interface AlbumTileProps {
  album: string;
  artist: string;
  // id?: string;
  // src?: any; // TODO
}
const AlbumTile = ({ album, artist }: AlbumTileProps) => {
  return (
    <Button styleType="tile">
      <div className={styles.albumTile}>
        <div className={styles.art} />

        <div className={styles.tag}>
          <div className={styles.album}>{album}</div>
          <div className={styles.artist}>{artist}</div>
        </div>
      </div>
    </Button>
  );
};

export default AlbumTile;
