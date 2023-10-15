import { pizzaData } from '#/data';
import PizzaDetailCard from '@/components/PizzaDetailCard';

export default function Menu({ pizzas = pizzaData }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map(pizza => (
              <PizzaDetailCard key={pizza.name} {...pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  );
}
