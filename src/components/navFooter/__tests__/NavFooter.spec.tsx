import React from 'react';

import renderWithStore from 'testUtils/renderWithStore';
import NavFooter from '../NavFooter';

describe('<NavFooter/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(
      <NavFooter />
    );

    expect(container).toMatchSnapshot();
  });
});
