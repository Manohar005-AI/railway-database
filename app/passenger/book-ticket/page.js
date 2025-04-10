'use client';
import styles from './sidebar.module.css';

import { useState } from 'react';
import PassengerSidebar from '@/components/PassengerSidebar';

const mockTrains = [
  { id: 1, name: 'Express 101', source: 'Delhi', destination: 'Mumbai', date: '2025-04-12' },
  { id: 2, name: 'Rajdhani', source: 'Delhi', destination: 'Chennai', date: '2025-04-12' },
  { id: 3, name: 'Shatabdi', source: 'Mumbai', destination: 'Delhi', date: '2025-04-12' },
];

export default function BookTicketPage() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = mockTrains.filter(
      t =>
        t.source.toLowerCase() === source.toLowerCase() &&
        t.destination.toLowerCase() === destination.toLowerCase() &&
        t.date === date
    );
    setResults(filtered);
  };

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <PassengerSidebar />

      <h1>🎟️ Book Ticket</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleSearch}>Search Trains</button>
      </div>

      {results.length === 0 && <p>No trains found.</p>}

      {results.map(train => (
        <div key={train.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <p><strong>{train.name}</strong></p>
          <p>{train.source} → {train.destination}</p>
          <p>Date: {train.date}</p>
          <button>Book Now</button> {/* In future, link to seat selection page */}
        </div>
      ))}
    </div>
  );
}
