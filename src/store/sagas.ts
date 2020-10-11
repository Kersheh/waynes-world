import { all, fork } from 'redux-saga/effects';

import addAlbumSaga from 'containers/addAlbum/addAlbumSaga';
import librarySaga from 'containers/library/librarySaga';

export default function* rootSaga() {
  yield all([fork(addAlbumSaga), fork(librarySaga)]);
}
