import { ActionCreator } from 'redux';

import { Action, View } from 'types';

enum appActions {
  SET_ACTIVE_VIEW = 'SET_ACTIVE_VIEW',
  SET_APP_LOADING = 'SET_APP_LOADING'
}

export const setActiveViewAction: ActionCreator<Action> = (data: View) => {
  return {
    type: appActions.SET_ACTIVE_VIEW,
    data
  };
};

export const setAppLoadingAction: ActionCreator<Action> = (data: boolean) => {
  return {
    type: appActions.SET_APP_LOADING,
    data
  };
};

export default appActions;
