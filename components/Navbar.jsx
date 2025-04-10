// components/Navbar.jsx
'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <Link href="/">Home</Link> |{' '}
      <Link href="/train-search">Search Trains</Link> |{' '}
      <Link href="/login">Login</Link> |{' '}
      <Link href="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
