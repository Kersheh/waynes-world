import { all, takeLatest, put, call } from 'redux-saga/effects';

import { Action } from 'types';
import { getLibrary } from 'services';
import { getErrorMessage } from 'containers/error/errorHelper';
import { setAppLoadingAction } from 'app/appActions';
import { setErrorMessageAction } from 'containers/error/errorActions';
import libraryActions, { getLibrarySuccessAction } from './libraryActions';

function* getLibrarySaga(action: Action) {
  yield put(setAppLoadingAction(true));

  const res = yield call(
    getLibrary,
    action.data?.sortBy,
    action.data?.sortOrder
  );

  if (res.status === 200) {
    yield put(
      getLibrarySuccessAction({
        albums: res.data.albumsAll,
        recentlyAddedAlbums: res.data.albumsRecentlyAdded
      })
    );
  } else {
    yield put(setErrorMessageAction(getErrorMessage(res)));
  }

  yield put(setAppLoadingAction(false));
}

export function* librarySaga() {
  yield all([yield takeLatest(libraryActions.GET_LIBRARY, getLibrarySaga)]);
}

export default librarySaga;
