import React from 'react';

import renderWithStore from 'testUtils/renderWithStore';
import SearchBar from '../SearchBar';

describe('<SearchBar/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(<SearchBar />);

    expect(container).toMatchSnapshot();
  });
});
