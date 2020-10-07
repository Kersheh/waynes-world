import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'types';
import Button from 'components/button/Button';
import IconHome from 'components/icons/IconHome';
import IconHomeOutline from 'components/icons/IconHomeOutline';
import IconLibrary from 'components/icons/IconLibrary';
import IconLibraryOutline from 'components/icons/IconLibraryOutline';
import IconPlus from 'components/icons/IconPlus';
import IconPlusOutline from 'components/icons/IconPlusOutline';
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
          onClick={() => dispatch(setActiveViewAction('addAlbum'))}
          styleType="fullWidth"
        >
          <div className={styles.content}>
            {activeView === 'addAlbum' ? <IconPlus /> : <IconPlusOutline />}
            <div>Add Album</div>
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
