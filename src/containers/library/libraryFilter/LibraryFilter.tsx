import React from 'react';
import { DebouncedFunc } from 'lodash';

import Button from 'components/button/Button';
import IconSearchOutline from 'components/icons/IconSearchOutline';
import IconHeart from 'components/icons/IconHeart';
import IconHeartOutline from 'components/icons/IconHeartOutline';
import styles from './LibraryFilter.module.scss';

interface LibraryFilterProps {
  setFilterQuery: DebouncedFunc<(val: string) => void>;
  filterFavourite: boolean;
  setFilterFavourite: React.Dispatch<React.SetStateAction<boolean>>;
}
const LibraryFilter = ({
  setFilterQuery,
  filterFavourite,
  setFilterFavourite
}: LibraryFilterProps) => {
  return (
    <div className={styles.libraryFilter}>
      <IconSearchOutline />

      <input
        type="text"
        name="libraryFilter"
        placeholder="Filter"
        autoComplete="off"
        onChange={e => setFilterQuery(e.target.value)}
      />

      <Button onClick={() => setFilterFavourite(!filterFavourite)}>
        {filterFavourite ? <IconHeart /> : <IconHeartOutline />}
      </Button>
    </div>
  );
};

export default LibraryFilter;
