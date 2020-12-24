import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAlbumArt } from 'utils/serviceUtil';
import useIsVisible from 'utils/hooks/useIsVisible';
import Button from 'components/button/Button';
import Image from 'components/image/Image';
import { setAlbumViewAction } from '../libraryActions';
import styles from './LibraryAlbum.module.scss';

interface LibraryAlbumProps {
  id: string;
  album: string;
  artist: string;
}
const LibraryAlbum = ({ id, album, artist }: LibraryAlbumProps) => {
  const dispatch = useDispatch();
  const [artBase64, setArtBase64] = useState<string | null>(null);
  const [initLoad, setInitLoad] = useState(true);
  const [isVisible, visibleRef] = useIsVisible();

  // lazy load album art for visible library album element in dom
  useEffect(() => {
    if (isVisible && initLoad) {
      // clear initial load to prevent refetch
      setInitLoad(false);
      fetchAlbumArt(id, setArtBase64);
    }
  }, [isVisible, initLoad, id]);

  return (
    <div className={styles.libraryAlbum} ref={visibleRef}>
      <Button
        styleType="listItem"
        onClick={() => dispatch(setAlbumViewAction(id))}
      >
        {!artBase64 && <div className={styles.albumArt} draggable="false" />}
        {artBase64 && <Image className={styles.albumArt} src={artBase64} />}

        <div className={styles.info}>
          <div className={styles.album}>{album}</div>
          <div className={styles.artist}>{artist}</div>
        </div>
      </Button>
    </div>
  );
};

export default LibraryAlbum;
