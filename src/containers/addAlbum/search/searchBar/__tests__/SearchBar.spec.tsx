import React from 'react';

import renderWithStore from 'testUtils/renderWithStore';
import SearchBar from '../SearchBar';

jest.mock('react-hook-form', () => ({
  useFormContext: () => ({
    register: jest.fn()
  })
}));

describe('<SearchBar/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(<SearchBar />);

    expect(container).toMatchSnapshot();
  });
});
