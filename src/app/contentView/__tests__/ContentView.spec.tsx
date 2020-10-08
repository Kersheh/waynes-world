import React from 'react';

import renderWithStore from 'testUtils/renderWithStore';
import ContentView from '../ContentView';

describe('<ContentView/> component', () => {
  it('should render', () => {
    const { container } = renderWithStore(
      <ContentView />
    );

    expect(container).toMatchSnapshot();
  });
});
