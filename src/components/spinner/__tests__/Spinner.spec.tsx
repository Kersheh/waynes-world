import React from 'react';
import { render } from '@testing-library/react';

import Spinner from '../Spinner';

describe('<Spinner/> component', () => {
  it('should render', () => {
    const { container } = render(<Spinner />);

    expect(container).toMatchSnapshot();
  });
});
