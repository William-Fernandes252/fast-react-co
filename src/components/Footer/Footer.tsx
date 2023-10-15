import Order from '@/components/Order';

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.{' '}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        `We're happy to welcome you between ${openHour}:00 and ${closeHour}:00.`
      )}
    </footer>
  );
}
