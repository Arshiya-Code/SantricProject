import Header from './components/Header';
import OverviewSection from './components/OverviewSection';
import PerformanceGraph from './components/PerformanceGraph';

function App() {
  return (
    <div style={styles.app}>
      <Header />
      <OverviewSection />
      <PerformanceGraph />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
    paddingBottom: '60px', 
  },
};

export default App;
