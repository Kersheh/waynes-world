import { Action } from 'types';
import { errorActions } from './errorActions';

export interface ErrorState {
  message: string | null;
}

export const initialState: ErrorState = {
  message: null
};

const errorReducer = (state = initialState, action: Action): ErrorState => {
  const { type, data } = action;

  switch (type) {
    case errorActions.SET_ERROR_MSG:
      return {
        ...state,
        message: data
      };
    case errorActions.CLEAR_ERROR_MSG:
      return {
        ...state,
        message: null
      };
    default:
      return state;
  }
};

export default errorReducer;
