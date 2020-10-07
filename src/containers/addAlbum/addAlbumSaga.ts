import { all, takeLatest, call } from 'redux-saga/effects';

import { Action } from 'types';
import { getSpotifySearchQuery } from 'services';
import addAlbumActions from './addAlbumActions';

function* searchSpotifySaga(action: Action) {
  const res = yield call(getSpotifySearchQuery, action.data);

  if (res.status === 200) {
    console.log(res.data);
  }
}

export function* addAlbumSagas() {
  yield all([yield takeLatest(addAlbumActions.SEARCH_SPOTIFY_REQUESTED, searchSpotifySaga)]);
}

export default addAlbumSagas;
