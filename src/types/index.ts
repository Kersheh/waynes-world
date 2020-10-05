import { RootState as RootReducerState } from 'store/reducers';

export * from './app';
export * from './library';

export type RootState = RootReducerState;

export type Action = {
  type: string;
  data?: any;
};

export type RequestData = {
  [key: string]: any;
};
