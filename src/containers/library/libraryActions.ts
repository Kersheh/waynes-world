import { ActionCreator } from 'redux';

import { Action, Album } from 'types';

enum libraryActions {
  GET_LIBRARY = 'GET_LIBRARY',
  GET_LIBRARY_SUCCESS = 'GET_LIBRARY_SUCCESS',
  SET_ALBUM_VIEW = 'SET_ALBUM_VIEW',
  CLEAR_ALBUM_VIEW = 'CLEAR_ALBUM_VIEW'
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

export const clearAlbumView: ActionCreator<Action> = () => {
  return {
    type: libraryActions.CLEAR_ALBUM_VIEW
  };
};

export default libraryActions;
