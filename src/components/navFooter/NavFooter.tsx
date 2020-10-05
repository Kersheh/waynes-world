import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactSVG } from 'react-svg';

import { RootState } from 'types';
import Button from 'components/button/Button';
import { setActiveViewAction } from 'app/appActions';
import styles from './NavFooter.module.scss';

const NavFooter = () => {
  const dispatch = useDispatch();
  const { activeView } = useSelector((state: RootState) => state.app);

  return (
    <div className={styles.navFooter}>
      <div className={styles.btns}>
        <Button
          onClick={() => dispatch(setActiveViewAction('home'))}
          styleType="fullWidth"
        >
          <div className={styles.content}>
            {activeView === 'home' ? (
              <ReactSVG src="/images/icons/home.svg" />
            ) : (
              <ReactSVG src="/images/icons/home-outline.svg" />
            )}
            <div>Home</div>
          </div>
        </Button>

        <Button
          onClick={() => dispatch(setActiveViewAction('search'))}
          styleType="fullWidth"
        >
          <div className={styles.content}>
            {activeView === 'search' ? (
              <ReactSVG src="/images/icons/search.svg" />
            ) : (
              <ReactSVG src="/images/icons/search-outline.svg" />
            )}
            <div>Search</div>
          </div>
        </Button>

        <Button
          onClick={() => dispatch(setActiveViewAction('library'))}
          styleType="fullWidth"
        >
          <div className={styles.content}>
            {activeView === 'library' ? (
              <ReactSVG src="/images/icons/library.svg" />
            ) : (
              <ReactSVG src="/images/icons/library-outline.svg" />
            )}
            <div>Library</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default NavFooter;
