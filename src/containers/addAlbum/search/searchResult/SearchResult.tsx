import React from 'react';

import { SpotifyArtist, SpotifyAlbum } from 'types';
import Button from 'components/button/Button';
import Image from 'components/image/Image';
import IconCaret from 'components/icons/IconCaret';
import styles from './SearchResult.module.scss';

interface SearchResultProps {
  artist?: SpotifyArtist;
  album?: SpotifyAlbum;
  isAllButton?: boolean;
  allButtonText?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const SearchResult = ({
  artist,
  album,
  isAllButton = false,
  allButtonText,
  onClick
}: SearchResultProps) => {
  return (
    <div className={styles.searchResult}>
      {artist && (
        <Button styleType="basic" onClick={onClick}>
          <div className={styles.artist}>
            <div className={styles.artistWrapper}>
              <Image
                src={artist.images[artist.images.length - 1].url}
                alt={`Search result artist ${artist.name}`}
                className={styles.image}
              />

              <div className={styles.artistInfo}>
                <div className={styles.artistName}>{artist.name}</div>
                <div className={styles.artistTag}>Artist</div>
              </div>
            </div>

            <IconCaret />
          </div>
        </Button>
      )}

      {album && (
        <Button styleType="basic" onClick={onClick}>
          <div className={styles.album}>
            <div className={styles.albumWrapper}>
              <Image
                src={album.images[album.images.length - 1].url}
                alt={`Search result album ${album.name}`}
                className={styles.image}
              />

              <div className={styles.artistInfo}>
                <div className={styles.artistName}>{album.name}</div>
                <div className={styles.artistTag}>
                  Album <span className={styles.bullet}>●</span>{' '}
                  {album.artists[0].name}
                </div>
              </div>
            </div>

            <IconCaret />
          </div>
        </Button>
      )}

      {isAllButton && (
        <Button styleType="basic" onClick={onClick}>
          <div className={styles.allButton}>
            <span>{allButtonText}</span>

            <IconCaret />
          </div>
        </Button>
      )}
    </div>
  );
};

export default SearchResult;
