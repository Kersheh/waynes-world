import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'types';
import Button from 'components/button/Button';
import IconHome from 'components/icons/IconHome';
import IconHomeOutline from 'components/icons/IconHomeOutline';
import IconSearch from 'components/icons/IconSearch';
import IconSearchOutline from 'components/icons/IconSearchOutline';
import IconLibrary from 'components/icons/IconLibrary';
import IconLibraryOutline from 'components/icons/IconLibraryOutline';
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
            {activeView === 'home' ? <IconHome /> : <IconHomeOutline />}
            <div>Home</div>
          </div>
        </Button>

        <Button
          onClick={() => dispatch(setActiveViewAction('search'))}
          styleType="fullWidth"
        >
          <div className={styles.content}>
            {activeView === 'search' ? <IconSearch /> : <IconSearchOutline />}
            <div>Search</div>
          </div>
        </Button>

        <Button
          onClick={() => dispatch(setActiveViewAction('library'))}
          styleType="fullWidth"
        >
          <div className={styles.content}>
            {activeView === 'library' ? (
              <IconLibrary />
            ) : (
              <IconLibraryOutline />
            )}
            <div>Library</div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default NavFooter;
