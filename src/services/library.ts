import { RequestData } from 'types';
import { postRequest, putRequest, getRequest, deleteRequest } from 'services';
import constants from 'utils/constants';

const { config } = constants;

export const getLibrary = () => {
  return getRequest(`${config.API}/library`);
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
