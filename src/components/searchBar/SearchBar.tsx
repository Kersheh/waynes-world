import React from 'react';
import { useFormContext } from 'react-hook-form';

import IconSearchOutline from 'components/icons/IconSearchOutline';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const { register } = useFormContext();

  return (
    <div className={styles.searchBar}>
      <IconSearchOutline />

      <input
        type="text"
        name="search"
        ref={register}
        autoFocus
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
