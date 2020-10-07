import { ActionCreator } from 'redux';

import { Action } from 'types';

enum addAlbumActions {
  CLEAR_SEARCH_QUERY = 'CLEAR_SEARCH_QUERY',
  SEARCH_SPOTIFY_REQUESTED = 'SEARCH_SPOTIFY_REQUESTED',
  SEARCH_SPOTIFY_SUCCESS = 'SEARCH_SPOTIFY_SUCCESS'
}

export const clearSearchQueryAction: ActionCreator<Action> = () => {
  return {
    type: addAlbumActions.CLEAR_SEARCH_QUERY
  };
};

export const searchSpotifyAction: ActionCreator<Action> = (data: string) => {
  return {
    type: addAlbumActions.SEARCH_SPOTIFY_REQUESTED,
    data
  };
};

export default addAlbumActions;
