export type Library = {
  name: string;
};

export type EditAlbumFormValues = {
  artist: string;
  album: string;
  year: string;
  genre: string;
  shelf: string;
  comments: string;
  albumArt: string | null;
};
