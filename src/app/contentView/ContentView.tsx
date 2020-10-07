import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'types';
// import Button from 'components/button/Button';
import Home from 'containers/home/Home';
import AddAlbum from 'containers/addAlbum/AddAlbum';
import Library from 'containers/library/Library';
import styles from './ContentView.module.scss';

// <div className={styles.resetBtn}>
//   <Button
//     onClick={() =>
//       dispatch({ type: 'PURGE', key: 'root', result: () => null })
//     }
//   >
//     @
//   </Button>
// </div>

const ContentView = () => {
  // const dispatch = useDispatch();
  const { activeView } = useSelector((state: RootState) => state.app);

  return (
    <div className={styles.contentView}>
      {activeView === 'home' && <Home />}
      {activeView === 'addAlbum' && <AddAlbum />}
      {activeView === 'library' && <Library />}
    </div>
  );
};

export default ContentView;
