import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Footer } from './Footer';

test('Footer', () => {
  render(<Footer />);
  expect(screen.getByText('Footer')).toBeDefined();
});
