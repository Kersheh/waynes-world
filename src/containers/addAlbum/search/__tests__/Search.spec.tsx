import React from 'react';

import renderWithStore from 'testUtils/renderWithStore';

import Search from '../Search';

describe('<Search/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(<Search />);

    expect(container).toMatchSnapshot();
  });
});
