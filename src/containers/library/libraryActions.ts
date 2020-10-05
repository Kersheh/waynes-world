import { ActionCreator } from 'redux';

import { Action } from 'types';

enum libraryActions {
  SET_ACTIVE_LIBRARY = 'SET_ACTIVE_LIBRARY',
  RESET_ACTIVE_LIBRARY = 'RESET_ACTIVE_LIBRARY',
  ADD_ALBUM = 'ADD_ALBUM'
}

export const setActiveLibraryAction: ActionCreator<Action> = (data: string) => {
  return {
    type: libraryActions.SET_ACTIVE_LIBRARY,
    data
  };
};

export const resetActiveLibraryAction: ActionCreator<Action> = () => {
  return {
    type: libraryActions.SET_ACTIVE_LIBRARY
  };
};

export const addAlbumAction: ActionCreator<Action> = () => {
  return {
    type: libraryActions.ADD_ALBUM
  };
};

export default libraryActions;
