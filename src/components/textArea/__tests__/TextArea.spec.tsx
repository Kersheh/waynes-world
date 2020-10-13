import React from 'react';
import { render } from '@testing-library/react';

import TextArea from '../TextArea';

jest.mock('react-hook-form', () => ({
  useFormContext: () => ({
    watch: jest.fn(),
    register: jest.fn()
  })
}));

describe('<TextArea/> component', () => {
  it('should render', () => {
    const { container } = render(<TextArea name="comments" />);

    expect(container).toMatchSnapshot();
  });
});
