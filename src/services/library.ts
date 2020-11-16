import { RequestData } from 'types';
import { postRequest, putRequest, getRequest, deleteRequest } from 'services';
import constants from 'utils/constants';

const { config } = constants;

export const getLibrary = (sortBy = 'artist', sortOrder = 'asc') => {
  return getRequest(`${config.API}/library?sort=${sortBy}&order=${sortOrder}`);
};

export const createAlbum = (data: RequestData) => {
  return postRequest(`${config.API}/library/album`, data);
};

export const updateAlbum = (id: string, data: RequestData) => {
  return putRequest(`${config.API}/library/album/${id}`, data);
};

export const deleteAlbum = (id: string) => {
  return deleteRequest(`${config.API}/library/album/${id}`);
};

export const favouriteAlbum = (id: string) => {
  return putRequest(`${config.API}/library/album/favourite/${id}`, {});
};

export const unfavouriteAlbum = (id: string) => {
  return putRequest(`${config.API}/library/album/unfavourite/${id}`, {});
};
