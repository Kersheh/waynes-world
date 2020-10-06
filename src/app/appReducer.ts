import { Action, View } from 'types';
import appActions from './appActions';

export interface LibraryState {
  activeView: View;
  appLoading: boolean;
}

const initialState: LibraryState = {
  activeView: 'home',
  appLoading: false
};

const appReducer = (state = initialState, action: Action) => {
  const { type, data } = action;

  switch (type) {
    case appActions.SET_ACTIVE_VIEW:
      return {
        ...state,
        activeView: data
      };
    case appActions.SET_APP_LOADING:
      return {
        ...state,
        appLoading: data
      };
    default:
      return state;
  }
};

export default appReducer;
