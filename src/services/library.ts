import { RequestData } from 'types';
import { postRequest, putRequest } from 'services';
import constants from 'utils/constants';

const { config } = constants;

export const createAlbum = async (data: RequestData) => {
  return postRequest(`${config.API}/library/album`, data);
};

export const updateAlbum = async (id: string, data: RequestData) => {
  return putRequest(`${config.API}/library/album/${id}`, data);
};
