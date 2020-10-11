import React from 'react';

import { SpotifyArtist, SpotifyAlbum } from 'types';
import Button from 'components/button/Button';
import IconCaretRight from 'components/icons/IconCaretRight';
import styles from './SearchResult.module.scss';

interface SearchResultProps {
  artist?: SpotifyArtist;
  album?: SpotifyAlbum;
}
const SearchResult = ({ artist, album }: SearchResultProps) => {
  return (
    <div className={styles.searchResult}>
      {artist && (
        <Button
          styleType="basic"
          onClick={() => console.log('open artist view of albums')}
        >
          <div className={styles.artist}>
            <div className={styles.artistWrapper}>
              <img
                src={artist.images[artist.images.length - 1].url}
                alt={`Search result artist ${artist.name}`}
              />

              <div className={styles.artistInfo}>
                <div className={styles.artistName}>{artist.name}</div>
                <div className={styles.artistTag}>Artist</div>
              </div>
            </div>

            <IconCaretRight />
          </div>
        </Button>
      )}

      {album && (
        <Button styleType="basic" onClick={() => console.log('add album')}>
          <div className={styles.album}>
            <div className={styles.albumWrapper}>
              <img
                src={album.images[album.images.length - 1].url}
                alt={`Search result album ${album.name}`}
              />

              <div className={styles.artistInfo}>
                <div className={styles.artistName}>{album.name}</div>
                <div className={styles.artistTag}>
                  Album <span className={styles.bullet}>●</span>{' '}
                  {album.artists[0].name}
                </div>
              </div>
            </div>

            <IconCaretRight />
          </div>
        </Button>
      )}
    </div>
  );
};

export default SearchResult;
