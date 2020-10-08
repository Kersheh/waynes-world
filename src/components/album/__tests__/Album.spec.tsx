import React from 'react';
import { render } from '@testing-library/react';

import Album from '../Album';

describe('<Album/> component', () => {
  it('should render', () => {
    const { container } = render(
      <Album title="Album Title" artist="Artist" />
    );

    expect(container).toMatchSnapshot();
  });
});
