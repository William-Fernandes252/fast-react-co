import { beforeEach, describe, it, expect } from 'vitest';
import Menu from '.';
import { render, screen } from '@testing-library/react';

interface PizzasFixture {
  pizzas: {
    name: string;
    ingredients: string;
    price: number;
    photoName: string;
    soldOut: boolean;
  }[];
}

describe('Filled menu', () => {
  beforeEach<PizzasFixture>(async context => {
    context.pizzas = [
      {
        name: 'Pizza Funghi',
        ingredients: 'Tomato, mozarella, mushrooms, and onion',
        price: 12,
        photoName: '/img/funghi.jpg',
        soldOut: false,
      },
      {
        name: 'Pizza Salamino',
        ingredients: 'Tomato, mozarella, and pepperoni',
        price: 15,
        photoName: '/img/salamino.jpg',
        soldOut: true,
      },
    ];
    render(<Menu pizzas={context.pizzas} />);
  });

  it<PizzasFixture>('renders correctly', () => {
    expect(screen.getByText('Our Menu')).toBeDefined();
  });

  it<PizzasFixture>('it renders pizzas', ({ pizzas }) => {
    pizzas.forEach(pizza => expect(screen.getByText(pizza.name)).toBeDefined());
  });
});

describe('Empty menu', () => {
  beforeEach<PizzasFixture>(context => {
    context.pizzas = [];
    render(<Menu pizzas={context.pizzas} />);
  });

  it('it renders empty message', () => {
    expect(
      screen.getByText(
        "We're still working on our menu. Please come back later.",
      ),
    ).toBeDefined();
  });
});
