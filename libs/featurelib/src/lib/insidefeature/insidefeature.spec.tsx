import React from 'react';
import { render } from '@testing-library/react';

import Insidefeature from './insidefeature';

describe('Insidefeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Insidefeature />);
    expect(baseElement).toBeTruthy();
  });
});
