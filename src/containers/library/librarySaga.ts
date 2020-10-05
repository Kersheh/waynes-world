import { all, takeLatest } from 'redux-saga/effects';

import { Action } from 'types';
import libraryActions from './libraryActions';

function* addAlbumSaga(action: Action) {
  yield console.log('add album saga', action);
}

export function* gameSagas() {
  yield all([yield takeLatest(libraryActions.ADD_ALBUM, addAlbumSaga)]);
}

export default gameSagas;
