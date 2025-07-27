import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainerList from './TrainerList';
import TrainerDetails from './TrainerDetails';
import trainers from './TrainersMock';

function App() {
  return (
    <BrowserRouter>
      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        fontFamily: 'Arial, sans-serif'
      }}>
        {/* Navigation always at top */}
        <div style={{ marginBottom: '30px' }}>
          <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
          <Link to="/trainers">Trainers</Link>
        </div>

        {/* Route content below navigation */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainerList data={trainers} />} />
          <Route path="/trainers/:id" element={<TrainerDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
