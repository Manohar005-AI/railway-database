'use client';
import styles from './sidebar.module.css';

import { useState } from 'react';
import PassengerSidebar from '@/components/PassengerSidebar';

export default function MyTicketsPage() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      trainName: 'Express 101',
      date: '2025-04-12',
      seat: 3,
      status: 'upcoming'
    },
    {
      id: 2,
      trainName: 'Shatabdi',
      date: '2025-03-28',
      seat: 2,
      status: 'past'
    }
  ]);

  const handleCancel = (ticketId) => {
    setTickets(prev =>
      prev.map(ticket =>
        ticket.id === ticketId ? { ...ticket, status: 'cancelled' } : ticket
      )
    );
    alert('Ticket cancelled successfully.');
  };

  return (
    <div>
      <h1>📂 My Tickets</h1>

      {tickets.length === 0 && <p>No tickets found.</p>}

      {tickets.map((ticket) => (
        <div key={ticket.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
          <p><strong>Train:</strong> {ticket.trainName}</p>
          <p><strong>Date:</strong> {ticket.date}</p>
          <p><strong>Seat:</strong> {ticket.seat}</p>
          <p><strong>Status:</strong> {ticket.status}</p>

          {ticket.status === 'upcoming' && (
            <button onClick={() => handleCancel(ticket.id)}>Cancel Ticket</button>
          )}
        </div>
      ))}
    </div>
  );
}
