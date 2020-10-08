import React from 'react';
import { render } from '@testing-library/react';

import Library from '../Library';

describe('<Library/> component', () => {
  it('should render', () => {
    const { container } = render(
      <Library />
    );

    expect(container).toMatchSnapshot();
  });
});
