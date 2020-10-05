import { all, fork } from 'redux-saga/effects';

import librarySaga from 'containers/library/librarySaga';

export default function* rootSaga() {
  yield all([fork(librarySaga)]);
}
