import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import { RootState } from 'types';
import Button from 'components/button/Button';
import SearchBar from 'components/searchBar/SearchBar';
import IconSearch from 'components/icons/IconSearch';
import { searchSpotifyAction, clearSearchQueryAction } from './addAlbumActions';
import styles from './AddAlbum.module.scss';

type FormValues = {
  search: string;
};

const AddAlbumContainer = () => {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const { searchQuery, searchResults } = useSelector((state: RootState) => state.addAlbum);
  const methods = useForm<FormValues>({
    defaultValues: {
      search: ''
    }
  });

  const submitSearch: SubmitHandler<FormValues> = data => {
    dispatch(searchSpotifyAction(data.search));
    setShowSearch(false);
  };

  useEffect(() => {
    dispatch(clearSearchQueryAction());
  }, []);

  return (
    <div className={styles.addAlbum}>
      <h2>Search to add new album</h2>

      <div className={styles.searchBtn}>
        <IconSearch />

        <button
          type="button"
          onClick={() => {
            setShowSearch(true);
            methods.reset({ search: searchQuery });
          }}
        >
          Artists or albums
        </button>
      </div>

      <div className={styles.searchResults}>
        {searchResults.length <= 0 && <h4>No results</h4>}
      </div>

      {showSearch &&
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
        </div>
      }
    </div>
  );
};

export default AddAlbumContainer;
