import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../App';
import './WorkshopTypesPage.css';

const WORKSHOPS = [
  { id: 1, name: 'Python', duration: 2, emoji: '🐍', desc: 'Scripting, data analysis and automation' },
  { id: 2, name: 'Scilab', duration: 3, emoji: '📐', desc: 'Numerical computing and simulation' },
  { id: 3, name: 'OpenFOAM', duration: 5, emoji: '💨', desc: 'CFD and engineering simulations' },
  { id: 4, name: 'DWSIM', duration: 2, emoji: '⚗️', desc: 'Chemical process simulation' },
  { id: 5, name: 'eSim', duration: 3, emoji: '⚡', desc: 'Circuit design and SPICE simulation' },
  { id: 6, name: 'R', duration: 2, emoji: '📊', desc: 'Statistical computing and data analysis' },
  { id: 7, name: 'Arduino', duration: 2, emoji: '🤖', desc: 'Embedded systems and IoT basics' },
  { id: 8, name: 'LaTeX', duration: 1, emoji: '📝', desc: 'Scientific document writing' },
];

export default function WorkshopTypesPage() {
  const { user } = useAuth();

  return (
    <div className="wt-page">
      <div className="container">

        {/* Header */}
        <div className="wt-header">
          <h1>Workshops</h1>
          <p>Browse and choose a workshop for your college</p>
        </div>

        {/* Grid */}
        <div className="wt-grid">
          {WORKSHOPS.map(w => (
            <Link
              key={w.id}
              to={`/workshop-types/${w.id}`}
              className="wt-card"
            >
              <div className="wt-emoji">{w.emoji}</div>

              <div className="wt-name">{w.name}</div>

              <div className="wt-desc">{w.desc}</div>

              <div className="wt-footer">
                <span>{w.duration} Day{w.duration > 1 ? 's' : ''}</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        {user && (
          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <Link to="/propose" className="btn btn-primary">
              Propose a Workshop
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
