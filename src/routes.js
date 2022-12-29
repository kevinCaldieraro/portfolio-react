import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Portfolio from './pages/PortfolioPage';

export default function Rts() {
  return (
    <Router>
      <Routes>
        <Route path="/Portfólio" element={<Portfolio />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
