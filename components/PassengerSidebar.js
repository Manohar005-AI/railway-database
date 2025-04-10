'use client';
import styles from './sidebar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PassengerSidebar() {
  const pathname = usePathname();

  const links = [
    { label: '🏠 Home', href: '/' },
    { label: '🎟️ Book Ticket', href: '/passenger/book-ticket' },
    { label: '📂 My Tickets', href: '/passenger/my-tickets' },
    { label: '💳 Payment History', href: '/passenger/payment-history' },
    { label: '👤 Profile', href: '/passenger/profile' },
    { label: '📅 Train Schedules', href: '/passenger/train-schedules' } // NEW
  ];
  
  return (
    <div style={{
      width: '200px',
      minHeight: '100vh',
      background: '#f1f1f1',
      padding: '20px',
      boxSizing: 'border-box',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <h2 style={{ marginBottom: '20px' }}>🚆 Passenger Panel</h2>
      <nav>
        {links.map(link => (
          <Link key={link.href} href={link.href}>
            <div style={{
              padding: '10px',
              margin: '5px 0',
              background: pathname === link.href ? '#ddd' : 'transparent',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              {link.label}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
}
