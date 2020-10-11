import React from 'react';
import { render } from '@testing-library/react';

import Home from '../Home';

describe('<Home/> component', () => {
  it('should render', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
