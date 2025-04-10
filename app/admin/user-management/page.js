'use client';

import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

export default function UserManagementPage() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Manohar',
      email: 'manohar@example.com',
      role: 'Passenger',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Aditi',
      email: 'aditi@example.com',
      role: 'Passenger',
      status: 'Banned',
    },
  ]);

  const toggleStatus = (id) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === id
          ? { ...user, status: user.status === 'Active' ? 'Banned' : 'Active' }
          : user
      )
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>👥 User Management</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: '1px solid #ccc',
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Status:</strong> {user.status}</p>
          <button onClick={() => toggleStatus(user.id)}>
            {user.status === 'Active' ? 'Ban User' : 'Unban User'}
          </button>
        </div>
      ))}
    </div>
  );
}
