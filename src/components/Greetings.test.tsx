

import { render, screen } from '@testing-library/react';
import Greeting from './Greetings';

test('renders greeting with name', () => {
  render(<Greeting name="Alice" />);
  const heading = screen.getByText(/hello, alice!/i);
  expect(heading).toBeDefined();
});
