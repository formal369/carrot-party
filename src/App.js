import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import IntroducePage from './pages/IntroducePage';
import MakePartyPage from './pages/MakePartyPage';
import LoginPage from './pages/LoginPage';

import './assets/css/bootstrap.min.css';
import './assets/css/reset.css';

function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/introduce" element={<IntroducePage />} />
        <Route exact path="/makeparty" element={<MakePartyPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
