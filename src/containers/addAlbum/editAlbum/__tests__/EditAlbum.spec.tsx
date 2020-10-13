import React from 'react';

import renderWithStore from 'testUtils/renderWithStore';

import EditAlbum from '../EditAlbum';

describe('<EditAlbum/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(<EditAlbum setShowEditAlbum={() => {}} />);

    expect(container).toMatchSnapshot();
  });
});
