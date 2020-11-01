import { ActionCreator } from 'redux';

import { Action } from 'types';

enum homeActions {
  OPEN_ALBUM_IN_LIBRARY = 'OPEN_ALBUM_IN_LIBRARY'
}

export const openAlbumInLibraryAction: ActionCreator<Action> = (
  data: string
) => {
  return {
    type: homeActions.OPEN_ALBUM_IN_LIBRARY,
    data
  };
};

export default homeActions;
