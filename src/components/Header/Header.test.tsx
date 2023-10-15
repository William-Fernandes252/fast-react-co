import { beforeEach, it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('renders correctly', () => {
    expect(screen.getByText('Fast React Pizza Co.')).toBeDefined();
  });
});
