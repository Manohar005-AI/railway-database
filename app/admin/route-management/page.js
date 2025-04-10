'use client';

import { useState } from 'react';

export default function RouteManagementPage() {
  const [routes, setRoutes] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const addRoute = () => {
    if (!from.trim() || !to.trim()) return;
    setRoutes([...routes, { from: from.trim(), to: to.trim() }]);
    setFrom('');
    setTo('');
  };

  const deleteRoute = (index) => {
    const updated = [...routes];
    updated.splice(index, 1);
    setRoutes(updated);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🛤️ Route Management</h1>

      <input
        type="text"
        placeholder="From Station"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        placeholder="To Station"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <button onClick={addRoute} style={{ marginLeft: '10px' }}>Add Route</button>

      <h3>Assigned Routes</h3>
      {routes.map((route, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
          <span>{route.from} → {route.to}</span>
          <button onClick={() => deleteRoute(index)} style={{ marginLeft: '10px' }}>Delete</button>
        </div>
      ))}
    </div>
  );
}
