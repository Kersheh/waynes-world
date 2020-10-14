import React from 'react';

import renderWithStore from 'testUtils/renderWithStore';
import Library from '../Library';

describe('<Library/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(<Library />);

    expect(container).toMatchSnapshot();
  });
});
