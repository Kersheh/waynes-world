import { isUndefined } from 'lodash';

import { Action, SpotifyArtist, SpotifyAlbum } from 'types';
import addAlbumActions from './addAlbumActions';

export interface AddAlbumState {
  searchQuery: string;
  searchResults: {
    artists: Array<SpotifyArtist>;
    albums: Array<SpotifyAlbum>;
  };
  editAlbumId: string | null;
  editAlbum: {
    artist: string;
    album: string;
    year: string;
    genre: string;
    shelf: string;
    comments: string;
  };
  editAlbumArt: {
    base64: string | null;
    url: string;
  };
  openEditAlbumView: boolean;
}

const initialState: AddAlbumState = {
  searchQuery: '',
  searchResults: {
    artists: [],
    albums: []
  },
  editAlbumId: null,
  editAlbum: {
    artist: '',
    album: '',
    year: '',
    genre: '',
    shelf: '',
    comments: ''
  },
  editAlbumArt: {
    base64: null,
    url: ''
  },
  openEditAlbumView: false
};

const addAlbumReducer = (
  state = initialState,
  action: Action
): AddAlbumState => {
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
    case addAlbumActions.CLEAR_EDIT_ALBUM:
      return {
        ...state,
        editAlbum: {
          ...initialState.editAlbum
        },
        editAlbumArt: {
          ...initialState.editAlbumArt
        },
        editAlbumId: null
      };
    case addAlbumActions.SET_EDIT_ALBUM:
      return {
        ...state,
        editAlbum: data.album,
        editAlbumId: !isUndefined(data.albumId)
          ? data.albumId
          : state.editAlbumId,
        openEditAlbumView: true
      };
    case addAlbumActions.SET_EDIT_ALBUM_ART:
      return {
        ...state,
        editAlbumArt: {
          base64: data?.base64 ?? null,
          url: data?.url ?? ''
        }
      };
    case addAlbumActions.CLEAR_EDIT_ALBUM_VIEW_STATE:
      return {
        ...state,
        openEditAlbumView: false
      };
    default:
      return state;
  }
};

export default addAlbumReducer;
