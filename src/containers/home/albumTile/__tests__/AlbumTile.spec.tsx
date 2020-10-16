import React from 'react';
import { render } from '@testing-library/react';

import AlbumTile from '../AlbumTile';

describe('<AlbumTile/> component', () => {
  it('should render', () => {
    const { container } = render(
      <AlbumTile title="Album Title" artist="Artist" />
    );

    expect(container).toMatchSnapshot();
  });
});
