import React from 'react';

import renderWithStore from 'testUtils/renderWithStore';
import Home from '../Home';

describe('<Home/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(<Home />);

    expect(container).toMatchSnapshot();
  });
});
