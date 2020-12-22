import React from 'react';

import IconSearchOutline from 'components/icons/IconSearchOutline';
import styles from './LibraryFilter.module.scss';

interface LibraryFilterProps {
  setFilterQuery: React.Dispatch<React.SetStateAction<string>>;
}
const LibraryFilter = ({ setFilterQuery }: LibraryFilterProps) => {
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
    </div>
  );
};

export default LibraryFilter;
