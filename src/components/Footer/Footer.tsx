import { useState, useEffect, useRef } from 'react';
import Order from '@/components/Order';

export default function Footer() {
  const [date, setDate] = useState(new Date());

  const hour = date.getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  const timerIdRef = useRef<number | null>(null);
  if (isOpen && !timerIdRef.current) {
    timerIdRef.current = window.setInterval(() => {
      setDate(new Date());
    }, 1000);
  } else if (!isOpen && timerIdRef.current) {
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  }

  return (
    <footer className="footer">
      <p>{date.toLocaleTimeString()}</p>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        `We're happy to welcome you between ${openHour}:00 and ${closeHour}:00.`
      )}
    </footer>
  );
}
