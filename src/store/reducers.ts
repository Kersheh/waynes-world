import { combineReducers } from 'redux';

import { Action } from 'types';
import appReducer from 'app/appReducer';
import libraryReducer from 'containers/library/libraryReducer';

const combinedReducer = combineReducers({
  app: appReducer,
  library: libraryReducer
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer = (state: RootState, action: Action) =>
  combinedReducer(state, action);

export default rootReducer;
