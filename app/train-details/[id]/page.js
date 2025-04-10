'use client';

import { useParams } from 'next/navigation';

const dummyTrains = [
  {
    id: 1,
    name: 'Express 101',
    from: 'Hyderabad',
    to: 'Delhi',
    time: '10:00 AM',
    seats: 42,
    price: 350,
    schedule: ['Hyderabad - 10:00 AM', 'Nagpur - 1:00 PM', 'Delhi - 7:00 PM']
  },
  {
    id: 2,
    name: 'Superfast 202',
    from: 'Mumbai',
    to: 'Kolkata',
    time: '2:00 PM',
    seats: 28,
    price: 500,
    schedule: ['Mumbai - 2:00 PM', 'Nagpur - 6:00 PM', 'Kolkata - 11:00 PM']
  }
];

export default function TrainDetailsPage() {
  const { id } = useParams();
  const train = dummyTrains.find(t => t.id.toString() === id);

  if (!train) {
    return <div>Train not found!</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{train.name}</h1>
      <p><strong>Route:</strong> {train.from} → {train.to}</p>
      <p><strong>Departure Time:</strong> {train.time}</p>
      <p><strong>Seats Available:</strong> {train.seats}</p>
      <p><strong>Price:</strong> ₹{train.price}</p>

      <h3>🗓️ Schedule:</h3>
      <ul>
        {train.schedule.map((stop, index) => (
          <li key={index}>{stop}</li>
        ))}
      </ul>
    </div>
  );
}
