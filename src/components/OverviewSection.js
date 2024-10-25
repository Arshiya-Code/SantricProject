import React from 'react';
import { FaUser, FaChartLine, FaChartBar, FaUserTie, FaDownload } from 'react-icons/fa';

const OverviewSection = () => (
  <div style={styles.container}>
    <div style={styles.header}>
      <h2 style={styles.title}>Overview</h2>
      <div style={styles.actions}>
        <select style={styles.dropdown}>
          <option value="year">Show: The Year</option>
        </select>
        <button style={styles.generateButton}>
          <FaDownload style={styles.downloadIcon} /> Generate Report
        </button>
      </div>
    </div>

    <div style={styles.metrics}>
      {/* Metric Card 1 */}
      <MetricCard icon="person" value="Number of Students" number="18067" subtitle="compared to last year" positive={true} />
      <MetricCard icon="graph" value="Average Attendance" number="94%" subtitle="compared to last month" positive={false} />
      <MetricCard icon="bar-chart" value="Overall Performance" number="87%" subtitle="compared to last semester" positive={true} />
      <MetricCard icon="ratio" value="Teacher-Student Ratio" number="1:25" subtitle="optimal ratio maintained" positive={true} />
    </div>
  </div>
);

const MetricCard = ({ icon, value, number, subtitle, positive }) => {
  const icons = {
    person: <FaUser />,
    graph: <FaChartLine />,
    'bar-chart': <FaChartBar />,
    ratio: <FaUserTie />,
  };

  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icons[icon]}</div>
      <div style={styles.details}>
        <h3 style={styles.value}>{value}</h3>
        <p style={styles.number}>{number}</p>
        <h3 style={styles.subtitle}>{subtitle}</h3>
      </div>
      <button style={{ ...styles.percentageButton, backgroundColor: positive ? 'green' : 'pink' }}>
        {positive ? '+' : '-'} {Math.abs(Math.random() * 20).toFixed(2)}%
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // Reduced gap for mobile
  },
  dropdown: {
    padding: '8px',
    fontSize: '14px', // Adjust font size for mobile
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  generateButton: {
    padding: '8px 15px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  downloadIcon: {
    marginRight: '5px',
  },
  metrics: {
    display: 'flex',
    flexDirection: 'column', 
    gap: '15px', // Reduced gap for mobile
  },
  card: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    fontSize: '20px', // Adjusted icon size
    marginRight: '15px',
    color: '#007bff',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align text to the left
  },
  value: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
  number: {
    fontSize: '24px', // Adjusted number size
    fontWeight: 'bold',
    margin: '5px 0',
  },
  subtitle: {
    fontSize: '12px',
    color: '#888',
  },
  percentageButton: {
    padding: '5px 10px',
    fontSize: '12px',
    borderRadius: '15px',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default OverviewSection;
