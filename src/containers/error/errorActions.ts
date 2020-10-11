import { ActionCreator } from 'redux';

import { Action } from 'types';

export enum errorActions {
  SET_ERROR_MSG = 'SET_ERROR_MSG',
  CLEAR_ERROR_MSG = 'CLEAR_ERROR_MSG'
}

export const setErrorMessageAction: ActionCreator<Action> = (data: string) => {
  return {
    type: errorActions.SET_ERROR_MSG,
    data
  };
};

export const clearErrorMessageAction: ActionCreator<Action> = () => {
  return {
    type: errorActions.CLEAR_ERROR_MSG
  };
};
