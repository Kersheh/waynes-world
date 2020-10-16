import { Action, Album } from 'types';
import libraryActions from './libraryActions';

export interface LibraryState {
  albums: Array<Album>;
  activeAlbumId: string | null;
}

const initialState: LibraryState = {
  albums: [],
  activeAlbumId: null
};

const libraryReducer = (state = initialState, action: Action): LibraryState => {
  const { type, data } = action;

  switch (type) {
    case libraryActions.GET_LIBRARY_SUCCESS:
      return {
        ...state,
        albums: data
      };
    case libraryActions.SET_ALBUM_VIEW:
      return {
        ...state,
        activeAlbumId: data
      };
    case libraryActions.CLEAR_ALBUM_VIEW:
      return {
        ...state,
        activeAlbumId: null
      };
    default:
      return state;
  }
};

export default libraryReducer;
