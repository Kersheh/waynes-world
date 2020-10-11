import React from 'react';
import { render } from '@testing-library/react';

import Button from '../Button';

describe('<Button/> component', () => {
  it('should render', () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });
});
