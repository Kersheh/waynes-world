import { ActionCreator } from 'redux';

import {
  Action,
  SpotifyArtist,
  SpotifyAlbum,
  EditAlbumFormValues
} from 'types';

enum addAlbumActions {
  CLEAR_SEARCH_QUERY = 'CLEAR_SEARCH_QUERY',
  SEARCH_SPOTIFY_REQUESTED = 'SEARCH_SPOTIFY_REQUESTED',
  SEARCH_SPOTIFY_SUCCESS = 'SEARCH_SPOTIFY_SUCCESS',
  CLEAR_EDIT_ALBUM = 'CLEAR_EDIT_ALBUM',
  FETCH_EXTERNAL_ALBUM_ART = 'FETCH_EXTERNAL_ALBUM_ART',
  SET_EDIT_ALBUM = 'SET_EDIT_ALBUM',
  SET_EDIT_ALBUM_ART = 'SET_EDIT_ALBUM_ART',
  SAVE_UPDATE_ALBUM_ACTION = 'SAVE_UPDATE_ALBUM_ACTION',
  CLEAR_EDIT_ALBUM_VIEW_STATE = 'CLEAR_EDIT_ALBUM_VIEW_STATE'
}

export const clearSearchQueryAction: ActionCreator<Action> = () => {
  return {
    type: addAlbumActions.CLEAR_SEARCH_QUERY
  };
};

export const searchSpotifyAction: ActionCreator<Action> = (data: string) => {
  return {
    type: addAlbumActions.SEARCH_SPOTIFY_REQUESTED,
    data
  };
};

export const searchSpotifySuccessAction: ActionCreator<Action> = (data: {
  artists: Array<SpotifyArtist>;
  albums: Array<SpotifyAlbum>;
}) => {
  return {
    type: addAlbumActions.SEARCH_SPOTIFY_SUCCESS,
    data
  };
};

export const clearEditAlbumAction: ActionCreator<Action> = () => {
  return {
    type: addAlbumActions.CLEAR_EDIT_ALBUM
  };
};

export const fetchExternalAlbumArtAction: ActionCreator<Action> = (
  data: string
) => {
  return {
    type: addAlbumActions.FETCH_EXTERNAL_ALBUM_ART,
    data
  };
};

export const setEditAlbumAction: ActionCreator<Action> = (data: {
  album: {
    artist: string;
    album: string;
    year: string;
    genre: string;
    shelf: string;
    comments: string;
  };
  albumId?: string;
}) => {
  return {
    type: addAlbumActions.SET_EDIT_ALBUM,
    data
  };
};

export const setEditAlbumArtAction: ActionCreator<Action> = (data: {
  base64: string;
  url: string;
}) => {
  return {
    type: addAlbumActions.SET_EDIT_ALBUM_ART,
    data
  };
};

export const saveUpdateAlbumAction: ActionCreator<Action> = (
  data: EditAlbumFormValues
) => {
  return {
    type: addAlbumActions.SAVE_UPDATE_ALBUM_ACTION,
    data
  };
};

export const clearEditAlbumViewStateAction: ActionCreator<Action> = () => {
  return {
    type: addAlbumActions.CLEAR_EDIT_ALBUM_VIEW_STATE
  };
};

export default addAlbumActions;
