import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CategoryDetail from './pages/CategoryDetail';
import FreelancerDetail from './pages/FreelancerDetail';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryDetail />} />
          <Route path="/freelancer/:freelancerId" element={<FreelancerDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;