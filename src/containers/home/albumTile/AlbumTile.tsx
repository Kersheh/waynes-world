import React from 'react';
import { useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';

import Button from 'components/button/Button';
import Image from 'components/image/Image';
import { openAlbumInLibraryAction } from '../homeActions';
import styles from './AlbumTile.module.scss';

interface AlbumTileProps {
  album: string;
  artist: string;
  id: string;
  createdAt: string;
  artBase64?: string;
}
const AlbumTile = ({ album, artist, id, createdAt, artBase64 }: AlbumTileProps) => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => dispatch(openAlbumInLibraryAction(id))}
      styleType="tile"
    >
      <div className={styles.albumTile}>
        {!artBase64 && <div className={styles.art} draggable="false" />}
        {artBase64 && (
          <Image
            className={styles.art}
            src={`data:image/jpeg;base64,${artBase64}`}
          />
        )}

        <div className={styles.tag}>
          <div className={styles.album}>{album}</div>
          <div className={styles.artist}>{artist}</div>
          <div className={styles.timestamp}>Added {format(parseISO(createdAt), 'MMM dd, yyyy')}</div>
        </div>
      </div>
    </Button>
  );
};

export default AlbumTile;
