import React from 'react';
import Home from './Home';
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Hello Luka/i);
  expect(linkElement).toBeInTheDocument();
});
