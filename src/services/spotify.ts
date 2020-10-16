import { getRequest } from 'services';
import constants from 'utils/constants';

const { config } = constants;

export const getSpotifySearchQuery = (query: string) => {
  return getRequest(`${config.API}/spotify/search?q=${query}`);
};

export const getSpotifyAlbumsByArtist = (artist: string) => {
  return getRequest(`${config.API}/spotify/albums?artist=${artist}`);
};
