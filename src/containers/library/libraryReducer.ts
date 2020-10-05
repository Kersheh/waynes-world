import { Action, Library } from 'types';
import libraryActions from './libraryActions';

export interface LibraryState {
  libraries: Array<Library>;
  activeLibrary: string | null;
}

const initialState: LibraryState = {
  libraries: [],
  activeLibrary: null
};

const libraryReducer = (state = initialState, action: Action) => {
  const { type, data } = action;

  switch (type) {
    case libraryActions.SET_ACTIVE_LIBRARY:
      return {
        ...state,
        activeLibrary: data
      };
    case libraryActions.RESET_ACTIVE_LIBRARY:
      return {
        ...state,
        activeLibrary: null
      };
    case libraryActions.ADD_ALBUM:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default libraryReducer;
