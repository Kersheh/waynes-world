import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';

import { Album } from 'types';
import Button from 'components/button/Button';
import Image from 'components/image/Image';
import IconCaret from 'components/icons/IconCaret';
import TextArea from 'components/textArea/TextArea';
import { clearAlbumView } from '../libraryActions';
import styles from './AlbumView.module.scss';

interface AlbumViewProps {
  album: Album;
}
const AlbumView = ({ album }: AlbumViewProps) => {
  const dispatch = useDispatch();
  const [backgroundColor, setBackgroundColor] = useState<string | null>(null);

  return (
    <div className={styles.albumView}>
      <div className={styles.header}>
        <Button onClick={() => dispatch(clearAlbumView())}>
          <IconCaret className={styles.left} />
        </Button>
      </div>

      <div
        className={styles.artWrapper}
        style={{
          backgroundImage: backgroundColor
            ? `linear-gradient(${backgroundColor}, black)`
            : ''
        }}
      >
        <div className={styles.art}>
          {!album.artBase64 && (
            <div className={styles.artMissing} draggable="false">
              Testing
            </div>
          )}
          {album.artBase64 && (
            <Image
              className={styles.artImg}
              src={`data:image/jpeg;base64,${album.artBase64}`}
              getImgDominantHexColor={setBackgroundColor}
            />
          )}
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.album}>{album.album}</div>
            <div className={styles.artist}>{album.artist}</div>
            {album.year && (
              <div className={styles.year}>Album · {album.year}</div>
            )}
            {album.genre && <div className={styles.genre}>{album.genre}</div>}
          </div>

          <div className={styles.right}>
            {album.createdAt && (
              <div className={styles.createdAt}>
                <div className={styles.label}>Added:</div>
                <div>{format(parseISO(album.createdAt), 'MMM dd, yyyy')}</div>
              </div>
            )}
            {album.shelf && (
              <div className={styles.shelf}>
                <div className={styles.label}>Shelf:</div>
                <div>{album.shelf}</div>
              </div>
            )}
          </div>
        </div>

        {album.comments && (
          <div className={styles.comments}>
            <hr />
            <TextArea name="comments" readOnlyValue={album.comments} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AlbumView;
