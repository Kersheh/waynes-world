import React from 'react';
import { render } from '@testing-library/react';

import NavHeader from '../NavHeader';

describe('<NavHeader/> component', () => {
  it('should render', () => {
    const { container } = render(
      <NavHeader />
    );

    expect(container).toMatchSnapshot();
  });
});
