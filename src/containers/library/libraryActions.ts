import { ActionCreator } from 'redux';

import { Action, Album } from 'types';

enum libraryActions {
  GET_LIBRARY = 'GET_LIBRARY',
  GET_LIBRARY_SUCCESS = 'GET_LIBRARY_SUCCESS'
}

export const getLibraryAction: ActionCreator<Action> = () => {
  return {
    type: libraryActions.GET_LIBRARY
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

export default libraryActions;
