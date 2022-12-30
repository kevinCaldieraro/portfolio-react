import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

export default function Rts() {
  return (
    <Router>
      <Routes>
        <Route path="/Portfólio" element={<PortfolioPage />} />
        <Route path="/Contato" element={<ContactPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}
