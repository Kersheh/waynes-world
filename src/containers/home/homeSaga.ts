import { all, takeLatest, put } from 'redux-saga/effects';

import { Action } from 'types';
import { setActiveViewAction } from 'app/appActions';
import { setAlbumViewAction } from 'containers/library/libraryActions';
import homeActions from './homeActions';

function* openAlbumInLibrarySaga(action: Action) {
  yield put(setActiveViewAction('library'));
  yield put(setAlbumViewAction(action.data));
}

export function* homeSaga() {
  yield all([
    yield takeLatest(homeActions.OPEN_ALBUM_IN_LIBRARY, openAlbumInLibrarySaga)
  ]);
}

export default homeSaga;
