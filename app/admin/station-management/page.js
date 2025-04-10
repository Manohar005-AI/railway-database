'use client';

import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

export default function StationManagementPage() {
  const [stations, setStations] = useState(['City A', 'City B']);
  const [newStation, setNewStation] = useState('');

  const addStation = () => {
    if (!newStation.trim()) return;
    setStations([...stations, newStation.trim()]);
    setNewStation('');
  };

  const deleteStation = (name) => {
    setStations(stations.filter(station => station !== name));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🏙️ Station Management</h1>

      <input
        type="text"
        placeholder="New Station Name"
        value={newStation}
        onChange={e => setNewStation(e.target.value)}
      />
      <button onClick={addStation}>Add Station</button>

      <h3>Existing Stations</h3>
      {stations.map((station, index) => (
        <div key={index} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
          <span>{station}</span>
          <button onClick={() => deleteStation(station)} style={{ marginLeft: '10px' }}>Delete</button>
        </div>
      ))}
    </div>
  );
}
