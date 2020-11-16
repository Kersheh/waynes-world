import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { parseISO, getYear } from 'date-fns';
import { startCase } from 'lodash';

import { RootState, SpotifyAlbum } from 'types';
import { getSpotifyAlbumByID, getSpotifyArtistByID } from 'services';
import Button from 'components/button/Button';
import IconSearch from 'components/icons/IconSearch';
import IconCaret from 'components/icons/IconCaret';
import SearchBar from './searchBar/SearchBar';
import SearchResult from './searchResult/SearchResult';
import {
  searchSpotifyAction,
  clearSearchQueryAction,
  setEditAlbumAction,
  fetchExternalAlbumArtAction
} from '../addAlbumActions';
import styles from './Search.module.scss';

export const setNewAlbumWithSpotifyInfo = async (
  album: SpotifyAlbum,
  dispatch: any
) => {
  // if spotify image exists, dispatch in parallel with set edit
  if (album?.images[0].url) {
    dispatch(fetchExternalAlbumArtAction(album.images[0].url));
  }

  // fetch potential genre from spotify based on album then fallback to artist genre
  const albumInfo = await getSpotifyAlbumByID(album.id);
  let genre = albumInfo?.data?.body?.genres[0] ?? null;
  const artistID = albumInfo?.data?.body?.artists[0]?.id ?? '';
  const artistInfo = genre || (await getSpotifyArtistByID(artistID));
  genre = genre || startCase(artistInfo?.data?.body?.genres[0] ?? '');

  dispatch(
    setEditAlbumAction({
      album: {
        artist: album.artists[0].name,
        album: album.name,
        year: getYear(parseISO(album.release_date)),
        genre,
        shelf: '',
        comments: ''
      }
    })
  );
};

type SearchFormValues = {
  search: string;
};

interface SearchProps {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
const Search = ({ showSearch, setShowSearch }: SearchProps) => {
  const dispatch = useDispatch();
  const { searchQuery, searchResults } = useSelector(
    (state: RootState) => state.addAlbum
  );
  const [hasRecentlySearched, setHasRecentlySearched] = useState(
    searchResults.artists.length > 0 || searchResults.albums.length > 0
  );
  const [searchSecondaryView, setSearchSecondaryView] = useState<
    'artistAlbums' | 'allArtists' | 'allAlbums' | null
  >(null);
  const methods = useForm<SearchFormValues>({
    defaultValues: {
      search: ''
    }
  });

  const submitSearch: SubmitHandler<SearchFormValues> = data => {
    dispatch(searchSpotifyAction(data.search));
    setHasRecentlySearched(false);
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchBtn}>
        <IconSearch />

        <Button
          type="button"
          styleType="basic"
          onClick={() => {
            setShowSearch(true);
            methods.reset({ search: searchQuery });
          }}
        >
          Artists or albums
        </Button>
      </div>

      {showSearch && (
        <div className={styles.searchOverlay}>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submitSearch)}>
              <div className={styles.searchHeader}>
                <SearchBar />

                <Button
                  onClick={() => {
                    setSearchSecondaryView(null);
                    setShowSearch(false);
                    setHasRecentlySearched(
                      searchResults.artists.length > 0 ||
                        searchResults.albums.length > 0
                    );
                    dispatch(clearSearchQueryAction());
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </FormProvider>

          {/* Primary search result view */}
          {!searchSecondaryView && (
            <div className={styles.searchResults}>
              {searchResults.artists.length <= 0 &&
              searchResults.albums.length <= 0 ? (
                <h4>No results</h4>
              ) : (
                <>
                  {hasRecentlySearched && <h4>Recent search results...</h4>}
                  <SearchResult
                    artist={searchResults.artists[0]}
                    onClick={() => setSearchSecondaryView('artistAlbums')}
                  />

                  {searchResults.albums
                    .slice(0, 5)
                    .map((album: SpotifyAlbum, index: number) => (
                      <SearchResult
                        key={`${album.name}-${index}`}
                        album={album}
                        onClick={async () =>
                          setNewAlbumWithSpotifyInfo(album, dispatch)
                        }
                      />
                    ))}

                  <div className={styles.allResults}>
                    <SearchResult
                      isAllButton
                      allButtonText="All artists"
                      onClick={() => setSearchSecondaryView('allArtists')}
                    />
                    <SearchResult
                      isAllButton
                      allButtonText="All albums"
                      onClick={() => setSearchSecondaryView('allAlbums')}
                    />
                  </div>
                </>
              )}
            </div>
          )}

          {/* Secondary albums by artist search result view */}
          {searchSecondaryView === 'artistAlbums' && (
            <div className={styles.searchResults}>
              <div className={styles.headerSecondary}>
                <Button onClick={() => setSearchSecondaryView(null)}>
                  <IconCaret className={styles.left} />
                </Button>
              </div>
              Artist albums
            </div>
          )}

          {/* Secondary all artists search result view */}
          {searchSecondaryView === 'allArtists' && (
            <div className={styles.searchResults}>
              <div className={styles.headerSecondary}>
                <Button onClick={() => setSearchSecondaryView(null)}>
                  <IconCaret className={styles.left} />
                </Button>
              </div>
              All artists
            </div>
          )}

          {/* Secondary all albums search result view */}
          {searchSecondaryView === 'allAlbums' && (
            <div className={styles.searchResults}>
              <div className={styles.headerSecondary}>
                <Button onClick={() => setSearchSecondaryView(null)}>
                  <IconCaret className={styles.left} />
                </Button>
              </div>
              All albums
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
