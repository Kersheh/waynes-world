import { ActionCreator } from 'redux';

import { Action } from 'types';

enum appActions {
  SET_ACTIVE_VIEW = 'SET_ACTIVE_VIEW'
}

export const setActiveViewAction: ActionCreator<Action> = (data: string) => {
  return {
    type: appActions.SET_ACTIVE_VIEW,
    data
  };
};

export default appActions;
