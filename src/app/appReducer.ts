import { Action, View } from 'types';
import appActions from './appActions';

export interface LibraryState {
  activeView: View;
}

const initialState: LibraryState = {
  activeView: 'home'
};

const appReducer = (state = initialState, action: Action) => {
  const { type, data } = action;

  switch (type) {
    case appActions.SET_ACTIVE_VIEW:
      return {
        ...state,
        activeView: data
      };
    default:
      return state;
  }
};

export default appReducer;
