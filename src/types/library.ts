export type Album = {
  id: string;
  album: string;
  artist: string;
  year?: number;
  genre?: string;
  shelf?: string;
  comments?: string;
  artBase64?: string;
  createdAt: string;
  updatedAt: string;
  favourite?: boolean;
};

export type EditAlbumFormValues = {
  artist: string;
  album: string;
  year: string;
  genre: string;
  shelf: string;
  comments: string;
};
