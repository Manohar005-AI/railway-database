'use client';

import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

export default function ScheduleManagementPage() {
  const [trainId, setTrainId] = useState('');
  const [schedules, setSchedules] = useState([]);
  const [newStop, setNewStop] = useState({ station: '', arrival: '', departure: '', stopNumber: '' });

  const addStop = () => {
    if (!newStop.station || !newStop.arrival || !newStop.departure || !newStop.stopNumber) return;
    setSchedules([...schedules, newStop]);
    setNewStop({ station: '', arrival: '', departure: '', stopNumber: '' });
  };

  const deleteStop = (index) => {
    const updated = [...schedules];
    updated.splice(index, 1);
    setSchedules(updated);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>📅 Schedule Management</h1>

      <input
        type="text"
        placeholder="Train ID"
        value={trainId}
        onChange={(e) => setTrainId(e.target.value)}
        style={{ marginBottom: '10px' }}
      />

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Station Name"
          value={newStop.station}
          onChange={(e) => setNewStop({ ...newStop, station: e.target.value })}
        />
        <input
          type="text"
          placeholder="Arrival Time"
          value={newStop.arrival}
          onChange={(e) => setNewStop({ ...newStop, arrival: e.target.value })}
        />
        <input
          type="text"
          placeholder="Departure Time"
          value={newStop.departure}
          onChange={(e) => setNewStop({ ...newStop, departure: e.target.value })}
        />
        <input
          type="number"
          placeholder="Stop #"
          value={newStop.stopNumber}
          onChange={(e) => setNewStop({ ...newStop, stopNumber: e.target.value })}
        />
        <button onClick={addStop} style={{ marginLeft: '10px' }}>Add Stop</button>
      </div>

      <h3>Schedule for Train ID: {trainId}</h3>
      {schedules.map((stop, index) => (
        <div key={index} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
          <p><strong>Stop #{stop.stopNumber}</strong></p>
          <p>Station: {stop.station}</p>
          <p>Arrival: {stop.arrival}</p>
          <p>Departure: {stop.departure}</p>
          <button onClick={() => deleteStop(index)}>Remove Stop</button>
        </div>
      ))}
    </div>
  );
}
