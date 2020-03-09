import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

test('renders sample paragraph', () => {
  const { getByTestId } = render(<App />);
  const element = getByTestId(/app/i);
  expect(element).toBeInTheDocument();
});
