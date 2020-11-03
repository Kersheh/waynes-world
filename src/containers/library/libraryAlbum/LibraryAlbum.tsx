import React from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/button/Button';
import Image from 'components/image/Image';
import { setAlbumViewAction } from '../libraryActions';
import styles from './LibraryAlbum.module.scss';

interface LibraryAlbumProps {
  id: string;
  album: string;
  artist: string;
  artBase64?: string;
}
const LibraryAlbum = ({ id, album, artist, artBase64 }: LibraryAlbumProps) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.libraryAlbum}>
      <Button
        styleType="listItem"
        onClick={() => dispatch(setAlbumViewAction(id))}
      >
        {!artBase64 && <div className={styles.albumArt} draggable="false" />}
        {artBase64 && (
          <Image
            className={styles.albumArt}
            src={`data:image/jpeg;base64,${artBase64}`}
          />
        )}

        <div className={styles.info}>
          <div className={styles.album}>{album}</div>
          <div className={styles.artist}>{artist}</div>
        </div>
      </Button>
    </div>
  );
};

export default LibraryAlbum;
