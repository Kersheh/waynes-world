import React from 'react';

import renderWithStore from 'testUtils/renderWithStore';
import AlbumTile from '../AlbumTile';

describe('<AlbumTile/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(
      <AlbumTile album="Album Title" artist="Artist" id="1234567890" />
    );

    expect(container).toMatchSnapshot();
  });
});
