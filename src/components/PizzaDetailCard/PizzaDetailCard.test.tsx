import { beforeEach, it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import PizzaDetailCard from './';

type PizzaFixture = {
  pizza: {
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
  };
};

function assertPizzaCardRendered(pizza: PizzaFixture['pizza']) {
  expect(screen.getByText(pizza.name)).toBeDefined();
  expect(screen.getByText(pizza.ingredients)).toBeDefined();
}

describe('Available pizza detail card', () => {
  beforeEach<PizzaFixture>(context => {
    context.pizza = {
      name: 'Pizza Funghi',
      ingredients: 'Tomato, mozarella, mushrooms, and onion',
      price: 12,
      photoName: '/img/funghi.jpg',
      soldOut: false,
    };
    render(<PizzaDetailCard {...context.pizza} />);
  });

  it<PizzaFixture>('renders correctly', ({ pizza }) => {
    assertPizzaCardRendered(pizza);
  });

  it('renders price in currency format', () => {
    expect(screen.getByText('$12.00')).toBeDefined();
  });
});

describe('Sold out pizza detail card', () => {
  beforeEach<PizzaFixture>(context => {
    context.pizza = {
      name: 'Pizza Funghi',
      ingredients: 'Tomato, mozarella, mushrooms, and onion',
      price: 12,
      photoName: '/img/funghi.jpg',
      soldOut: true,
    };
    render(<PizzaDetailCard {...context.pizza} />);
  });

  it<PizzaFixture>('renders correctly', ({ pizza }) => {
    assertPizzaCardRendered(pizza);
  });

  it('has sold out text', () => {
    expect(screen.getByText('Sould out')).toBeDefined();
  });

  it<PizzaFixture>('has "sold out" class', ({ pizza }) => {
    expect(
      screen
        .getByAltText(pizza.name)
        .parentElement?.classList.contains('sold-out'),
    ).toBeTruthy();
  });
});
