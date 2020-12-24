import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import { RootState, Action, SpotifyArtist, SpotifyAlbum } from 'types';
import {
  getSpotifySearchQuery,
  createAlbum,
  updateAlbum,
  getArrayBufferRequest
} from 'services';
import { getErrorMessage } from 'containers/error/errorHelper';
import { setAppLoadingAction, setActiveViewAction } from 'app/appActions';
import {
  setAlbumViewAction,
  getLibraryAction
} from 'containers/library/libraryActions';
import { setErrorMessageAction } from 'containers/error/errorActions';
import addAlbumActions, {
  searchSpotifySuccessAction,
  clearEditAlbumAction,
  setEditAlbumArtAction
} from './addAlbumActions';

const filterResultsWithImages = (data: Array<SpotifyArtist | SpotifyAlbum>) => {
  return data.filter(item => item.images.length > 0);
};

function* searchSpotifySaga(action: Action) {
  yield put(setAppLoadingAction(true));

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

  yield put(setAppLoadingAction(false));
}

function* saveUpdateAlbumSaga(action: Action) {
  yield put(setAppLoadingAction(true));

  const { base64 } = yield select(
    (state: RootState) => state.addAlbum.editAlbumArt
  );

  const res = !action.data.id
    ? yield call(createAlbum, {
        ...action.data.album,
        artBase64: base64
      })
    : yield call(updateAlbum, action.data.id, {
        ...action.data.album,
        artBase64: base64
      });

  if (res.status === 200 || res.status === 201) {
    yield put(getLibraryAction());
    yield put(setActiveViewAction('library'));
    yield put(setAlbumViewAction(res.data.id));
    yield put(clearEditAlbumAction());
  } else {
    yield put(setErrorMessageAction(getErrorMessage(res)));
  }

  yield put(setAppLoadingAction(false));
}

function* fetchExternalAlbumArtSaga(action: Action) {
  const data = yield call(getArrayBufferRequest, action.data);
  const base64 = yield Buffer.from(data, 'binary').toString('base64');

  yield put(
    setEditAlbumArtAction({
      base64: `data:image/jpeg;base64,${base64}`,
      url: action.data
    })
  );
}

export function* addAlbumSagas() {
  yield all([
    yield takeLatest(
      addAlbumActions.SEARCH_SPOTIFY_REQUESTED,
      searchSpotifySaga
    ),
    yield takeLatest(
      addAlbumActions.SAVE_UPDATE_ALBUM_ACTION,
      saveUpdateAlbumSaga
    ),
    yield takeLatest(
      addAlbumActions.FETCH_EXTERNAL_ALBUM_ART,
      fetchExternalAlbumArtSaga
    )
  ]);
}

export default addAlbumSagas;
