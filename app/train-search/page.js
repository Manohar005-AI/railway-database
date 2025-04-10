'use client';

import Link from 'next/link';

const dummyTrains = [
  {
    id: 1,
    name: 'Express 101',
    from: 'Hyderabad',
    to: 'Delhi',
    time: '10:00 AM',
    seats: 42,
    price: 350
  },
  {
    id: 2,
    name: 'Superfast 202',
    from: 'Mumbai',
    to: 'Kolkata',
    time: '2:00 PM',
    seats: 28,
    price: 500
  }
];

export default function TrainSearchPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Train Search Results</h1>
      {dummyTrains.map(train => (
        <div key={train.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <h3>{train.name}</h3>
          <p>{train.from} → {train.to}</p>
          <p>Departure: {train.time}</p>
          <p>Seats Available: {train.seats}</p>
          <p>Price: ₹{train.price}</p>

          {/* ✅ Link to train details page */}
          <Link href={`/train-details/${train.id}`}>
            <button style={{ marginTop: '0.5rem' }}>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
