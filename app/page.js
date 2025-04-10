'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    // In a real app, you'd fetch matching trains from DB
    router.push(`/train-search?source=${source}&destination=${destination}&date=${date}`);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🚄 Welcome to Railway Booking System</h1>

      <form onSubmit={handleSearch} style={{ marginTop: '2rem' }}>
        <label>
          Source Station: <br />
          <input value={source} onChange={(e) => setSource(e.target.value)} required />
        </label>
        <br /><br />

        <label>
          Destination Station: <br />
          <input value={destination} onChange={(e) => setDestination(e.target.value)} required />
        </label>
        <br /><br />

        <label>
          Travel Date: <br />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <br /><br />

        <button type="submit">🔍 Search Trains</button>
      </form>
    </div>
  );
}

  