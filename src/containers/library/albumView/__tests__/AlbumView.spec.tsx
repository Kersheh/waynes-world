import React from 'react';

import { Album } from 'types';
import renderWithStore from 'testUtils/renderWithStore';
import AlbumView from '../AlbumView';

describe('<AlbumView/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(<AlbumView album={{} as Album} />);

    expect(container).toMatchSnapshot();
  });
});
