import { all, takeLatest, takeLeading, put, call } from 'redux-saga/effects';

import { Action } from 'types';
import {
  getLibrary,
  favouriteAlbum,
  unfavouriteAlbum,
  deleteAlbum
} from 'services';
import { fetchLatestLibraryAfterUpdateSaga } from 'utils/sagaUtils';
import { getErrorMessage } from 'containers/error/errorHelper';
import { setAppLoadingAction } from 'app/appActions';
import { setErrorMessageAction } from 'containers/error/errorActions';
import libraryActions, {
  getLibrarySuccessAction,
  clearAlbumViewAction
} from './libraryActions';

function* getLibrarySaga(action: Action) {
  if (!action.data?.disableLoadingIndicator) {
    yield put(setAppLoadingAction(true));
  }

  const res = yield call(
    getLibrary,
    action.data?.sortBy,
    action.data?.sortOrder
  );

  if (res.status === 200) {
    yield put(
      getLibrarySuccessAction({
        albums: res.data.albumsAll,
        recentlyAddedAlbums: res.data.albumsRecentlyAdded,
        favouriteAlbums: res.data.albumsFavourite
      })
    );
  } else {
    yield put(setErrorMessageAction(getErrorMessage(res)));
  }

  if (!action.data?.disableLoadingIndicator) {
    yield put(setAppLoadingAction(false));
  }
}

function* favouriteAlbumSaga(action: Action) {
  yield call(favouriteAlbum, action.data);
  yield call(fetchLatestLibraryAfterUpdateSaga, true);
}

function* unfavouriteAlbumSaga(action: Action) {
  yield call(unfavouriteAlbum, action.data);
  yield call(fetchLatestLibraryAfterUpdateSaga, true);
}

function* deleteAlbumSaga(action: Action) {
  yield call(deleteAlbum, action.data);
  yield put(clearAlbumViewAction());
  yield call(fetchLatestLibraryAfterUpdateSaga, true);
}

export function* librarySaga() {
  yield all([
    yield takeLatest(libraryActions.GET_LIBRARY, getLibrarySaga),
    yield takeLatest(libraryActions.FAVOURITE_ALBUM, favouriteAlbumSaga),
    yield takeLatest(libraryActions.UNFAVOURITE_ALBUM, unfavouriteAlbumSaga),
    yield takeLeading(libraryActions.DELETE_ALBUM, deleteAlbumSaga)
  ]);
}

export default librarySaga;
