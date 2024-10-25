import { FaUser, FaChartLine, FaChartBar, FaUsers } from 'react-icons/fa';

const MetricCard = ({ icon, value, subtitle, positive }) => {
  const icons = {
    person: <FaUser />,
    graph: <FaChartLine />,
    'bar-chart': <FaChartBar />,
    ratio: <FaUsers />,
  };

  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icons[icon]}</div>
      <div style={styles.details}>
        <h3>{value}</h3>
        <p style={{ color: positive ? 'green' : 'red' }}>{subtitle}</p>
      </div>
    </div>
  );
};

const styles = {
  card: { display: 'flex', alignItems: 'center', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '8px' },
  icon: { fontSize: '24px', marginRight: '15px', color: '#007bff' },
  details: { display: 'flex', flexDirection: 'column' },
};

export default MetricCard;
