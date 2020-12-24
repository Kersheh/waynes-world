import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types';
import Home from 'containers/home/Home';
import AddAlbum from 'containers/addAlbum/AddAlbum';
import Library from 'containers/library/Library';
import Error from 'containers/error/Error';
import styles from './ContentView.module.scss';

const ContentView = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { activeView } = useSelector((state: RootState) => state.app);
  const { message } = useSelector((state: RootState) => state.error);

  // scroll to top on view change
  useEffect(() => {
    if (contentRef?.current?.scrollTo) {
      contentRef.current.scrollTo(0, 0);
    }
  }, [activeView]);

  return (
    <div ref={contentRef} className={styles.contentView}>
      {activeView === 'home' && <Home />}
      {activeView === 'addAlbum' && <AddAlbum />}
      {activeView === 'library' && <Library />}

      {message && <Error message={message} />}
    </div>
  );
};

export default ContentView;
