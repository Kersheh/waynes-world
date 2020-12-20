import { put, select } from 'redux-saga/effects';

import { RootState } from 'types';
import { getLibraryAction } from 'containers/library/libraryActions';

export function* fetchLatestLibraryAfterUpdateSaga(
  disableLoadingIndicator: boolean
) {
  const { sort } = yield select((state: RootState) => state.library);
  yield put(
    getLibraryAction({
      sortBy: sort.by,
      sortOrder: sort.order,
      disableLoadingIndicator
    })
  );
}
