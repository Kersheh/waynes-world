import React from 'react';

import styles from './SearchResult.module.scss';

interface SearchResultProps {
  input: string;
}
const SearchResult = ({ input }: SearchResultProps) => {
  return (
    <div className={styles.searchResult}>
      SearchResult Component {input}
    </div>
  );
};

export default SearchResult;

