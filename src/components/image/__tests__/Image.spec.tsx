import React from 'react';
import { render } from '@testing-library/react';

import Image from '../Image';

describe('<Image/> component', () => {
  it('should render', () => {
    const { container } = render(<Image src="/some/image/src" />);

    expect(container).toMatchSnapshot();
  });
});
