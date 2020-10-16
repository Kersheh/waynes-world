import React from 'react';

import renderWithStore from 'testUtils/renderWithStore';
import LibraryAlbum from '../LibraryAlbum';

describe('<LibraryAlbum/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(
      <LibraryAlbum
        id="some_album_id123"
        album="Album name"
        artist="Artist name"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
