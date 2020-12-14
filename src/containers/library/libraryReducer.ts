import { Action, Album } from 'types';
import libraryActions from './libraryActions';

export interface LibraryState {
  sort: {
    by: 'artist';
    order: 'asc' | 'desc';
  };
  albums: Array<Album>;
  recentlyAddedAlbums: Array<Album>;
  favouriteAlbums: Array<Album>;
  activeAlbumId: string | null;
}

const initialState: LibraryState = {
  sort: {
    by: 'artist',
    order: 'asc'
  },
  albums: [],
  recentlyAddedAlbums: [],
  favouriteAlbums: [],
  activeAlbumId: null
};

const libraryReducer = (state = initialState, action: Action): LibraryState => {
  const { type, data } = action;

  switch (type) {
    // case libraryActions.GET_LIBRARY:
    //   return {
    //     ...state,
    //     sort: {
    //       by: data?.sortBy ?? initialState.sort.by,
    //       order: data?.sortOrder ?? initialState.sort.order
    //     }
    //   };
    case libraryActions.GET_LIBRARY_SUCCESS:
      return {
        ...state,
        albums: data.albums,
        recentlyAddedAlbums: data.recentlyAddedAlbums,
        favouriteAlbums: data.favouriteAlbums
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
