import { Action, Album } from 'types';
import libraryActions from './libraryActions';

export interface LibraryState {
  albums: Array<Album>;
  recentlyAddedAlbums: Array<Album>;
  activeAlbumId: string | null;
}

const initialState: LibraryState = {
  albums: [],
  recentlyAddedAlbums: [],
  activeAlbumId: null
};

const libraryReducer = (state = initialState, action: Action): LibraryState => {
  const { type, data } = action;

  switch (type) {
    case libraryActions.GET_LIBRARY_SUCCESS:
      return {
        ...state,
        albums: data.albums,
        recentlyAddedAlbums: data.recentlyAddedAlbums
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
    case libraryActions.FAVOURITE_ALBUM:
      return {
        ...state,
        albums: state.albums.map(album => {
          return {
            ...album,
            favourite: album.id === data ? true : album.favourite
          };
        })
      };
    case libraryActions.UNFAVOURITE_ALBUM:
      return {
        ...state,
        albums: state.albums.map(album => {
          return {
            ...album,
            favourite: album.id === data ? false : album.favourite
          };
        })
      };
    default:
      return state;
  }
};

export default libraryReducer;
