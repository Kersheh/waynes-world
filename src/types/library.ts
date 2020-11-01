export type Album = {
  id: string;
  album: string;
  artist: string;
  year?: number;
  genre?: string;
  shelf?: string;
  comments?: string;
  albumArt?: string | null;
  createdAt: string;
  updatedAt: string;
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
