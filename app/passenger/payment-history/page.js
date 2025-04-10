'use client';
import PassengerSidebar from '@/components/PassengerSidebar';
import { useState } from 'react';

export default function PaymentHistoryPage() {
  const [payments] = useState([
    {
      id: 1,
      trainName: 'Express 101',
      amount: 500,
      date: '2025-04-09',
    },
    {
      id: 2,
      trainName: 'Shatabdi',
      amount: 850,
      date: '2025-03-28',
    }
  ]);

  return (
    <div>
      <h1>💳 Payment History</h1>

      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        payments.map((payment) => (
          <div key={payment.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <p><strong>Train:</strong> {payment.trainName}</p>
            <p><strong>Amount:</strong> ₹{payment.amount}</p>
            <p><strong>Date:</strong> {payment.date}</p>
          </div>
        ))
      )}
    </div>
  );
}
