import { ActionCreator } from 'redux';

import { Action, View } from 'types';

enum appActions {
  SET_ACTIVE_VIEW = 'SET_ACTIVE_VIEW'
}

export const setActiveViewAction: ActionCreator<Action> = (data: View) => {
  return {
    type: appActions.SET_ACTIVE_VIEW,
    data
  };
};

export default appActions;
