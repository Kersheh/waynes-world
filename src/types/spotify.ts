export type SpotifyImage = {
  height: number;
  width: number;
  url: string;
};

export type SpotifyArtist = {
  id: string;
  genres: Array<string>;
  images: Array<SpotifyImage>;
  name: string;
  type: string;
};

export type SpotifyAlbum = {
  id: string;
  album_type: string;
  artists: Array<{
    id: string;
    name: string;
    type: string;
  }>;
  images: Array<SpotifyImage>;
  name: string;
  release_date: string;
  type: string;
};
