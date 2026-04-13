import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import WorkshopTypesPage from './pages/WorkshopTypesPage';
import WorkshopDetailsPage from './pages/WorkshopDetailsPage';

import './App.css';

/* 🔥 minimal auth (just to stop errors) */
export const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

function App() {
  const user = null; // no login system for now

  return (
    <AuthContext.Provider value={{ user }}>
      <Router>
        <div className="app">
          <Navbar />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/workshop-types" element={<WorkshopTypesPage />} />
              <Route path="/workshop-types/:id" element={<WorkshopDetailsPage />} />

              {/* fallback */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;