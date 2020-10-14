import { Action, Album } from 'types';
import libraryActions from './libraryActions';

export interface LibraryState {
  albums: Array<Album>;
}

const initialState: LibraryState = {
  albums: []
};

const libraryReducer = (state = initialState, action: Action): LibraryState => {
  const { type, data } = action;

  switch (type) {
    case libraryActions.GET_LIBRARY_SUCCESS:
      return {
        ...state,
        albums: data
      };
    default:
      return state;
  }
};

export default libraryReducer;
