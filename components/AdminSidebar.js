'use client';
import styles from './sidebar.module.css'; 
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { label: '🏠 Dashboard', href: '/admin/dashboard' },
    { label: '🚆 Train Management', href: '/admin/train-management' },
    { label: '🏙️ Station Management', href: '/admin/station-management' },
    { label: '🛤️ Route Management', href: '/admin/route-management' },
    { label: '🕒 Schedule Management', href: '/admin/schedule-management' },
    { label: '👥 User Management', href: '/admin/user-management' },
    { label: '🎫 Ticket Monitoring', href: '/admin/ticket-monitoring' },
    { label: '💳 Payment Monitoring', href: '/admin/payment-monitoring' },
  ];

  return (
    <div style={{
      width: '220px',
      minHeight: '100vh',
      background: '#f1f1f1',
      padding: '20px',
      boxSizing: 'border-box',
      position: 'fixed',
      top: 0,
      left: 0
    }}>
      <h2 style={{ marginBottom: '20px' }}>🛠️ Admin Panel</h2>
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
