import React from 'react';
import { render } from '@testing-library/react';

import Featurelib from './featurelib';

describe('Featurelib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Featurelib />);
    expect(baseElement).toBeTruthy();
  });
});
