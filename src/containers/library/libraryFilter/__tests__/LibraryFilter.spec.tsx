import React from 'react';
import { render } from '@testing-library/react';

import LibraryFilter from '../LibraryFilter';

describe('<LibraryFilter/> component', () => {
  it('should render', () => {
    const { container } = render(<LibraryFilter setFilterQuery={() => {}} />);

    expect(container).toMatchSnapshot();
  });
});
