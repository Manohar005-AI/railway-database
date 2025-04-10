'use client';

export default function TrainSchedulesPage() {
  const dummySchedules = [
    {
      train: 'Express 101',
      route: ['Mumbai', 'Pune', 'Bhopal', 'Delhi'],
      times: ['06:00', '08:00', '14:00', '20:00']
    },
    {
      train: 'Rajdhani',
      route: ['Chennai', 'Bangalore', 'Hyderabad', 'Delhi'],
      times: ['05:30', '09:00', '13:30', '19:45']
    }
  ];

  return (
    <div>
      <h1>📅 Train Schedules</h1>

      {dummySchedules.map((schedule, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '1rem' }}>
          <h3>{schedule.train}</h3>
          <ul>
            {schedule.route.map((station, i) => (
              <li key={i}>
                <strong>{station}</strong> — Arrival: {schedule.times[i]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
