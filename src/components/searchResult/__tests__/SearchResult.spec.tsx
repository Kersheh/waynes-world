import React from 'react';
import { render } from '@testing-library/react';

import SearchResult from '../SearchResult';

describe('<SearchResult/> component', () => {
  it('should render', () => {
    const { container } = render(
      <SearchResult />
    );

    expect(container).toMatchSnapshot();
  });
});
