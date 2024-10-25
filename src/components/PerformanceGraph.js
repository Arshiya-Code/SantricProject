import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';

const data = [
  { name: 'Week 1', Students: 45, Teachers: 35 },
  { name: 'Week 2', Students: 65, Teachers: 70 },
  { name: 'Week 3', Students: 50, Teachers: 65 },
  { name: 'Week 4', Students: 75, Teachers: 50 },
  { name: 'Week 5', Students: 50, Teachers: 40 },
  { name: 'Week 6', Students: 72, Teachers: 80 },
  { name: 'Week 7', Students: 45, Teachers: 35 },
  { name: 'Week 8', Students: 65, Teachers: 70 },
  { name: 'Week 9', Students: 50, Teachers: 65 },
  { name: 'Week 10', Students: 75, Teachers: 50 },
  { name: 'Week 11', Students: 50, Teachers: 40 },
  { name: 'Week 12', Students: 92, Teachers: 80 },
];

const PerformanceGraph = () => {
  const [selectedWeek, setSelectedWeek] = useState('Week 1');

  const handleWeekChange = (event) => {
    setSelectedWeek(event.target.value);
  };

  // Get the current percentage for students based on selected week
  const studentPercentage = data.find(item => item.name === selectedWeek)?.Students || 0;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>School Performance</h2>

      <div style={styles.dropdownContainer}>
        <select onChange={handleWeekChange} style={styles.dropdown}>
          {data.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Students" stroke="#82ca9d" strokeWidth={3}>
            {data.map((entry, index) => (
              <Label
                key={`label-${index}`}
                value={entry.Students}
                position="top"
                style={{ fill: '#82ca9d', fontSize: '12px' }}
                offset={-5} 
              />
            ))}
          </Line>
          <Line type="monotone" dataKey="Teachers" stroke="#ff7300" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    margin: '20px 0',
  },
  dropdownContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '10px',
  },
  dropdown: {
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  title: {
    fontSize: '20px', // Adjust title size for mobile
  },
};

export default PerformanceGraph;
