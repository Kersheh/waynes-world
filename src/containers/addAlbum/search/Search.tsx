import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import { RootState, SpotifyAlbum } from 'types';
import Button from 'components/button/Button';
import SearchBar from 'components/searchBar/SearchBar';
import SearchResult from 'components/searchResult/SearchResult';
import IconSearch from 'components/icons/IconSearch';
import {
  searchSpotifyAction,
  clearSearchQueryAction
} from '../addAlbumActions';
import styles from './Search.module.scss';

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
  const methods = useForm<SearchFormValues>({
    defaultValues: {
      search: ''
    }
  });

  const submitSearch: SubmitHandler<SearchFormValues> = data => {
    dispatch(searchSpotifyAction(data.search));
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
                    setShowSearch(false);
                    dispatch(clearSearchQueryAction());
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </FormProvider>

          <div className={styles.searchResults}>
            {searchResults.artists <= 0 && searchResults.albums <= 0 ? (
              <h4>No results</h4>
            ) : (
              <>
                <SearchResult artist={searchResults.artists[0]} />

                {searchResults.albums
                  .slice(0, 5)
                  .map((album: SpotifyAlbum, index: number) => (
                    <SearchResult
                      key={`${album.name}-${index}`}
                      album={album}
                    />
                  ))}

                <div className={styles.allResults}>
                  <SearchResult
                    isAllButton
                    allButtonText="All artists"
                    onClick={() =>
                      console.log('open all artists search results')
                    }
                  />
                  <SearchResult
                    isAllButton
                    allButtonText="All albums"
                    onClick={() =>
                      console.log('open all albums search results')
                    }
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
