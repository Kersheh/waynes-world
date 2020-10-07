import { Action } from 'types';
import addAlbumActions from './addAlbumActions';

export interface AddAlbumState {
  searchQuery: string;
  searchResults: Array<any>; // TODO
}

const initialState: AddAlbumState = {
  searchQuery: '',
  searchResults: []
};

const addAlbumReducer = (state = initialState, action: Action) => {
  const { type, data } = action;

  switch (type) {
    case addAlbumActions.CLEAR_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: ''
      };
    case addAlbumActions.SEARCH_SPOTIFY_REQUESTED:
      return {
        ...state,
        searchQuery: data
      };
    case addAlbumActions.SEARCH_SPOTIFY_SUCCESS:
      return {
        ...state,
        searchResults: data
      };
    default:
      return state;
  }
};

export default addAlbumReducer;
