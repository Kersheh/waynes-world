import { Action, SpotifyArtist, SpotifyAlbum } from 'types';
import addAlbumActions from './addAlbumActions';

export interface AddAlbumState {
  searchQuery: string;
  searchResults: {
    artists: Array<SpotifyArtist>;
    albums: Array<SpotifyAlbum>;
  };
}

const initialState: AddAlbumState = {
  searchQuery: '',
  searchResults: {
    artists: [],
    albums: []
  }
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
        searchResults: {
          artists: data.artists,
          albums: data.albums
        }
      };
    default:
      return state;
  }
};

export default addAlbumReducer;
