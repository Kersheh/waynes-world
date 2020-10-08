import React from 'react';

import renderWithStore from 'testUtils/renderWithStore';
import AddAlbum from '../AddAlbum';

describe('<AddAlbum/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(
      <AddAlbum />
    );

    expect(container).toMatchSnapshot();
  });
});
