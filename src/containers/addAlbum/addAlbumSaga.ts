import { all, takeLatest, call, put } from 'redux-saga/effects';

import { Action } from 'types';
import { getSpotifySearchQuery } from 'services';
import addAlbumActions, { searchSpotifySuccessAction } from './addAlbumActions';

function* searchSpotifySaga(action: Action) {
  const res = yield call(getSpotifySearchQuery, action.data);

  if (res.status === 200) {
    console.log(res.data);
    yield put(searchSpotifySuccessAction({
      artists: res.data.body.artists.items,
      albums: res.data.body.albums.items
    }))
  }
}

export function* addAlbumSagas() {
  yield all([yield takeLatest(addAlbumActions.SEARCH_SPOTIFY_REQUESTED, searchSpotifySaga)]);
}

export default addAlbumSagas;
