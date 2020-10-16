import React from 'react';
import { useDispatch } from 'react-redux';

import { Album } from 'types';
import Button from 'components/button/Button';
import IconCaret from 'components/icons/IconCaret';
import { clearAlbumView } from '../libraryActions';
import styles from './AlbumView.module.scss';

interface AlbumViewProps {
  album: Album;
}
const AlbumView = ({ album }: AlbumViewProps) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.albumView}>
      <Button onClick={() => dispatch(clearAlbumView())}>
        <IconCaret className={styles.left} />
      </Button>
      <pre>{JSON.stringify(album, null, 2)}</pre>
    </div>
  );
};

export default AlbumView;
