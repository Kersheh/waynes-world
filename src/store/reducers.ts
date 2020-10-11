import { combineReducers } from 'redux';

import { Action } from 'types';
import appReducer from 'app/appReducer';
import addAlbumReducer from 'containers/addAlbum/addAlbumReducer';
import errorReducer, { initialState } from 'containers/error/errorReducer';
import libraryReducer from 'containers/library/libraryReducer';

const combinedReducer = combineReducers({
  app: appReducer,
  addAlbum: addAlbumReducer,
  error: errorReducer,
  library: libraryReducer
});

export type RootState = ReturnType<typeof combinedReducer>;

const rootReducer = (state: RootState, action: Action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return combinedReducer(
        {
          ...state,
          error: initialState
        },
        action
      );
    case 'PURGE':
      return combinedReducer(undefined, action);
    default:
      return combinedReducer(state, action);
  }
};

export default rootReducer;
