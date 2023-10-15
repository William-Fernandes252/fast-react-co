import { toCurrency } from '@/utils/format';

type Props = {
  name: string;
  ingredients: string;
  price: number;
  photoName: string;
  soldOut: boolean;
};

export default function PizzaDetailCard({
  name,
  ingredients,
  price,
  photoName,
  soldOut,
}: Props) {
  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'Sould out' : toCurrency(price)}</span>
      </div>
    </li>
  );
}
