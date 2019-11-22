import React from 'react';
import { render } from '@testing-library/react';
import Welcome from 'Routes/welcome';

describe('Welcome test suite', () => {
  it('should print Welcome', () => {
    const { getByText } = render(<Welcome />);

    const element = getByText('Welcome');

    expect(element).not.toBeUndefined();
  });
});
