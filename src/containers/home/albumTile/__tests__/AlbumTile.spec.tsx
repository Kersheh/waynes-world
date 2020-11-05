import React from 'react';

import renderWithStore from 'testUtils/renderWithStore';
import AlbumTile from '../AlbumTile';

describe('<AlbumTile/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(
      <AlbumTile album="Album Title" artist="Artist" createdAt="2020-12-01T-01:00+00" id="1234567890" />
    );

    expect(container).toMatchSnapshot();
  });
});
