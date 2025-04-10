'use client';

import { useState } from 'react';
import PassengerSidebar from '@/components/PassengerSidebar';

export default function ProfilePage() {
  const [name, setName] = useState('Manohar');
  const [email, setEmail] = useState('manohar@example.com');
  const [password, setPassword] = useState('');

  const handleUpdate = () => {
    alert('Profile updated!');
    // In real app, call API to save these changes
  };

  return (
    <div style={{ marginLeft: '220px', padding: '20px' }}>
      <PassengerSidebar />
      <h1>👤 My Profile</h1>

      <div style={{ maxWidth: '400px' }}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px' }}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px' }}
        />

        <label>New Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', width: '100%', marginBottom: '10px' }}
        />

        <button onClick={handleUpdate}>Save Changes</button>
      </div>
    </div>
  );
}
