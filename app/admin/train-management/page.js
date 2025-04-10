'use client';

import { useState } from 'react';
import AdminSidebar from '@/components/AdminSidebar';

export default function TrainManagementPage() {
  const [trains, setTrains] = useState([
    { id: 1, name: 'Express 101', from: 'City A', to: 'City B' }
  ]);

  const [newTrain, setNewTrain] = useState({ name: '', from: '', to: '' });

  const addTrain = () => {
    if (!newTrain.name || !newTrain.from || !newTrain.to) return;
    setTrains([...trains, { id: Date.now(), ...newTrain }]);
    setNewTrain({ name: '', from: '', to: '' });
  };

  const deleteTrain = (id) => {
    setTrains(trains.filter(train => train.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🚆 Train Management</h1>

      <h3>Add New Train</h3>
      <input
        type="text"
        placeholder="Train Name"
        value={newTrain.name}
        onChange={e => setNewTrain({ ...newTrain, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="From"
        value={newTrain.from}
        onChange={e => setNewTrain({ ...newTrain, from: e.target.value })}
      />
      <input
        type="text"
        placeholder="To"
        value={newTrain.to}
        onChange={e => setNewTrain({ ...newTrain, to: e.target.value })}
      />
      <button onClick={addTrain}>Add Train</button>

      <h3>Existing Trains</h3>
      {trains.map(train => (
        <div key={train.id} style={{ border: '1px solid gray', marginTop: '10px', padding: '10px' }}>
          <p><strong>{train.name}</strong> ({train.from} → {train.to})</p>
          <button onClick={() => deleteTrain(train.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
