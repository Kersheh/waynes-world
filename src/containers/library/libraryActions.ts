import { ActionCreator } from 'redux';

import { Action, Album } from 'types';

enum libraryActions {
  GET_LIBRARY = 'GET_LIBRARY',
  GET_LIBRARY_SUCCESS = 'GET_LIBRARY_SUCCESS',
  SET_ALBUM_VIEW = 'SET_ALBUM_VIEW',
  CLEAR_ALBUM_VIEW = 'CLEAR_ALBUM_VIEW',
  FAVOURITE_ALBUM = 'FAVOURITE_ALBUM',
  UNFAVOURITE_ALBUM = 'UNFAVOURITE_ALBUM',
  DELETE_ALBUM = 'DELETE_ALBUM'
}

export const getLibraryAction: ActionCreator<Action> = (data: {
  sortBy?: string;
  sortOrder?: string;
}) => {
  return {
    type: libraryActions.GET_LIBRARY,
    data
  };
};

export const getLibrarySuccessAction: ActionCreator<Action> = (
  data: Array<Album>
) => {
  return {
    type: libraryActions.GET_LIBRARY_SUCCESS,
    data
  };
};

export const setAlbumViewAction: ActionCreator<Action> = (data: string) => {
  return {
    type: libraryActions.SET_ALBUM_VIEW,
    data
  };
};

export const clearAlbumViewAction: ActionCreator<Action> = () => {
  return {
    type: libraryActions.CLEAR_ALBUM_VIEW
  };
};

export const favouriteAlbumAction: ActionCreator<Action> = (data: string) => {
  return {
    type: libraryActions.FAVOURITE_ALBUM,
    data
  };
};

export const unfavouriteAlbumAction: ActionCreator<Action> = (data: string) => {
  return {
    type: libraryActions.UNFAVOURITE_ALBUM,
    data
  };
};

export const deleteAlbumAction: ActionCreator<Action> = (data: string) => {
  return {
    type: libraryActions.DELETE_ALBUM,
    data
  };
};

export default libraryActions;
