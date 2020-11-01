import { all, fork } from 'redux-saga/effects';

import homeSaga from 'containers/home/homeSaga';
import addAlbumSaga from 'containers/addAlbum/addAlbumSaga';
import librarySaga from 'containers/library/librarySaga';

export default function* rootSaga() {
  yield all([fork(homeSaga), fork(addAlbumSaga), fork(librarySaga)]);
}
