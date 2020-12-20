import React from 'react';
import { useSelector } from 'react-redux';

import { RootState, Album } from 'types';
import AlbumTile from './albumTile/AlbumTile';
import styles from './Home.module.scss';

interface AlbumRowsLayoutProps {
  titleText: string;
  emptyText: string;
  albumsList: Array<Album>;
}
const AlbumRowsLayout = ({
  titleText,
  emptyText,
  albumsList
}: AlbumRowsLayoutProps) => {
  return (
    <>
      <h2>{titleText}</h2>

      {albumsList.length === 0 && <p>{emptyText}</p>}

      {/* Layout edge case of just two albums should be same first row */}
      {albumsList.length === 2 ? (
        <>
          <div className={styles.albumScroll}>
            {albumsList?.map((album, index) => (
              <AlbumTile
                album={album.album}
                artist={album.artist}
                id={album.id}
                createdAt={album.createdAt}
                key={`${album.album}-${index}`}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className={styles.albumScroll}>
            {albumsList?.map(
              (album, index) =>
                !(index % 2) && (
                  <AlbumTile
                    album={album.album}
                    artist={album.artist}
                    id={album.id}
                    createdAt={album.createdAt}
                    key={`${album.album}-${index}`}
                  />
                )
            )}
          </div>

          <div className={styles.albumScroll}>
            {albumsList?.map(
              (album, index) =>
                !!(index % 2) && (
                  <AlbumTile
                    album={album.album}
                    artist={album.artist}
                    id={album.id}
                    createdAt={album.createdAt}
                    key={`${album.album}-${index}`}
                  />
                )
            )}
          </div>
        </>
      )}
    </>
  );
};

const HomeContainer = () => {
  const { recentlyAddedAlbums, favouriteAlbums } = useSelector(
    (state: RootState) => state.library
  );

  return (
    <div className={styles.home}>
      <AlbumRowsLayout
        titleText="Recently added"
        emptyText="No recently added albums found."
        albumsList={recentlyAddedAlbums}
      />

      <AlbumRowsLayout
        titleText="Recently favourited"
        emptyText="No recently favourited albums found."
        albumsList={favouriteAlbums}
      />
    </div>
  );
};

export default HomeContainer;
