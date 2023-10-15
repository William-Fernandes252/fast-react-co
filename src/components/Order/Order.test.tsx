import { it, expect, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Order from '.';

describe('Order', () => {
  beforeEach(() => {
    render(<Order closeHour={11} />);
  });

  it('renders correctly', () => {
    expect(
      screen.getByText(
        'Were are open until 11:00. Come visit us or order online.',
      ),
    ).toBeDefined();
  });
});
