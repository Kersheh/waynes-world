import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';

import { fetchAlbumArt } from 'utils/serviceUtil';
import { RootState, Album } from 'types';
import Button from 'components/button/Button';
import Image from 'components/image/Image';
import IconCaret from 'components/icons/IconCaret';
import IconEdit from 'components/icons/IconEdit';
import IconDelete from 'components/icons/IconDelete';
import IconHeart from 'components/icons/IconHeart';
import IconHeartOutline from 'components/icons/IconHeartOutline';
import TextArea from 'components/textArea/TextArea';
import EditAlbum from 'containers/addAlbum/editAlbum/EditAlbum';
import {
  setEditAlbumAction,
  setEditAlbumArtAction,
  clearEditAlbumAction
} from 'containers/addAlbum/addAlbumActions';
import {
  clearAlbumViewAction,
  favouriteAlbumAction,
  unfavouriteAlbumAction,
  deleteAlbumAction
} from '../libraryActions';
import styles from './AlbumView.module.scss';

interface AlbumViewProps {
  album: Album;
}
const AlbumView = ({ album }: AlbumViewProps) => {
  const dispatch = useDispatch();
  const { editAlbumId } = useSelector((state: RootState) => state.addAlbum);
  const [backgroundColor, setBackgroundColor] = useState<string | null>(null);
  const [showEditAlbum, setShowEditAlbum] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [artBase64, setArtBase64] = useState<string | null>(null);

  // fetch potential album art from backend
  useEffect(() => {
    if (album.id) {
      fetchAlbumArt(album.id, setArtBase64);
    }
  }, [album.id]);

  // set album edit view
  useEffect(() => {
    if (!showEditAlbum) {
      dispatch(clearEditAlbumAction());
    } else {
      dispatch(
        setEditAlbumAction({
          album: {
            artist: album.artist,
            album: album.album,
            year: album.year,
            genre: album.genre,
            shelf: album.shelf,
            comments: album.comments
          },
          albumId: album.id
        })
      );
      dispatch(setEditAlbumArtAction({ base64: artBase64 }));
    }
  }, [album, dispatch, showEditAlbum]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {showEditAlbum && editAlbumId && (
        <div className={styles.albumViewEdit}>
          <EditAlbum setShowEditAlbum={setShowEditAlbum} closeOnSave />
        </div>
      )}

      {!showEditAlbum && (
        <div className={styles.albumView}>
          {showModal && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <h1>Delete Album</h1>
                <h4>Are you sure?</h4>

                <div className={styles.modalBtns}>
                  <Button
                    styleType="outline"
                    onClick={() => setShowModal(false)}
                  >
                    No
                  </Button>

                  <Button
                    styleType="outline"
                    onClick={() => dispatch(deleteAlbumAction(album.id))}
                  >
                    Yes
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className={styles.header}>
            <Button onClick={() => dispatch(clearAlbumViewAction())}>
              <IconCaret className={styles.left} />
            </Button>

            <div className={styles.right}>
              {album.favourite ? (
                <Button
                  styleType="icon"
                  onClick={() => dispatch(unfavouriteAlbumAction(album.id))}
                >
                  <IconHeart />
                </Button>
              ) : (
                <Button
                  styleType="icon"
                  onClick={() => dispatch(favouriteAlbumAction(album.id))}
                >
                  <IconHeartOutline />
                </Button>
              )}

              <Button styleType="icon" onClick={() => setShowEditAlbum(true)}>
                <IconEdit />
              </Button>

              <Button styleType="icon" onClick={() => setShowModal(true)}>
                <IconDelete />
              </Button>
            </div>
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
              {!artBase64 && (
                <div className={styles.artMissing} draggable="false" />
              )}
              {artBase64 && (
                <Image
                  className={styles.artImg}
                  src={`data:image/jpeg;base64,${artBase64}`}
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
                {album.genre && (
                  <div className={styles.genre}>{album.genre}</div>
                )}
              </div>

              <div className={styles.right}>
                {album.createdAt && (
                  <div className={styles.createdAt}>
                    <div className={styles.label}>Added:</div>
                    <div>
                      {format(parseISO(album.createdAt), 'MMM dd, yyyy')}
                    </div>
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
      )}
    </>
  );
};

export default AlbumView;
