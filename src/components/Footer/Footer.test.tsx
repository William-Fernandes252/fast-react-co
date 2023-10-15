import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '.';

type DateFixture = {
  currentDateTime: Date;
};

describe('Footer on open hours', () => {
  beforeEach<DateFixture>(context => {
    context.currentDateTime = new Date(2023, 10, 15, 17, 40);
    vi.useFakeTimers();
    vi.setSystemTime(context.currentDateTime);
    render(<Footer />);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it<DateFixture>('renders correctly', () => {
    expect(screen.getByText(/5:40:00/)).toBeDefined();
  });
});

describe('Footer on closed hours', () => {
  beforeEach<DateFixture>(context => {
    context.currentDateTime = new Date(2023, 10, 15, 23, 40);
    vi.useFakeTimers();
    vi.setSystemTime(context.currentDateTime);
    render(<Footer />);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it<DateFixture>('renders correctly', () => {
    expect(screen.getByText(/11:40:00/)).toBeDefined();
  });

  it<DateFixture>('renders closed message', () => {
    expect(
      screen.getByText("We're happy to welcome you between 11:00 and 22:00."),
    ).toBeDefined();
  });
});
