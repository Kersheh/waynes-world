import React from 'react';
import { render } from '@testing-library/react';

import TextInput from '../TextInput';


jest.mock('react-hook-form', () => ({
  useFormContext: () => ({
    watch: jest.fn(),
    register: jest.fn()
  })
}));

describe('<TextInput/> component', () => {
  it('should render', () => {
    const { container } = render(<TextInput name="artist" />);

    expect(container).toMatchSnapshot();
  });
});
