type Props = {
  closeHour: number;
};

export default function Order({ closeHour }: Props) {
  return (
    <div className="order">
      <p>Were are open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}
