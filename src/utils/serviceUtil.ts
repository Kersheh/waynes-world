import { Dispatch, SetStateAction } from 'react';

import { getAlbumArt } from 'services';

export const fetchAlbumArt = async (
  id: string,
  setArtBase64: Dispatch<SetStateAction<string | null>>
) => {
  const { data } = await getAlbumArt(id);
  setArtBase64(data?.albumArt ?? null);
};
