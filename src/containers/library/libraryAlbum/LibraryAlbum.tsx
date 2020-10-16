import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/button/Button';
import { setAlbumView } from '../libraryActions';
import styles from './LibraryAlbum.module.scss';

interface LibraryAlbumProps {
  id: string;
  album: string;
  artist: string;
  // albumArt?: any;
}
const LibraryAlbum = ({ id, album, artist }: LibraryAlbumProps) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.libraryAlbum}>
      <Button onClick={() => dispatch(setAlbumView(id))}>
        <div className={styles.albumArt} />

        <div className={styles.info}>
          <div className={styles.album}>{album}</div>
          <div className={styles.artist}>{artist}</div>
        </div>
      </Button>
    </div>
  );
};

export default LibraryAlbum;
