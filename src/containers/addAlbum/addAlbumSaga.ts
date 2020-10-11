import { all, takeLatest, call, put } from 'redux-saga/effects';

import { Action, SpotifyArtist, SpotifyAlbum } from 'types';
import { getSpotifySearchQuery } from 'services';
import { getErrorMessage } from 'containers/error/errorHelper';
import { setErrorMessageAction } from 'containers/error/errorActions';
import addAlbumActions, { searchSpotifySuccessAction } from './addAlbumActions';

const filterResultsWithImages = (data: Array<SpotifyArtist | SpotifyAlbum>) => {
  return data.filter(item => item.images.length > 0);
};

function* searchSpotifySaga(action: Action) {
  const res = yield call(getSpotifySearchQuery, action.data);

  if (res.status === 200) {
    yield put(
      searchSpotifySuccessAction({
        artists: filterResultsWithImages(res.data?.body?.artists?.items ?? []),
        albums: filterResultsWithImages(res.data?.body?.albums?.items ?? [])
      })
    );
  } else {
    yield put(setErrorMessageAction(getErrorMessage(res)));
  }
}

export function* addAlbumSagas() {
  yield all([
    yield takeLatest(
      addAlbumActions.SEARCH_SPOTIFY_REQUESTED,
      searchSpotifySaga
    )
  ]);
}

export default addAlbumSagas;
