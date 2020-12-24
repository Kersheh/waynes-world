import React from 'react';

import renderWithStore from 'testUtils/renderWithStore';
import FileUpload from '../FileUpload';

describe('<FileUpload/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(
      <FileUpload>
        <div />
      </FileUpload>
    );

    expect(container).toMatchSnapshot();
  });
});
