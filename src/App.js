import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import DissolvedOxygen from './components/DissolvedOxygen';
import Ponds from './components/Ponds';
import PondDetail from './components/PondDetail';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dissolvedoxygen" element={<DissolvedOxygen />} />
          <Route path="/ponds" element={<Ponds />} />
          <Route path="/ponds/:pondId" element={<PondDetail />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
