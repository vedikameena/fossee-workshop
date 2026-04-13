import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import './WorkshopDetailsPage.css';

const WORKSHOPS = {
  1: {
    id: 1,
    name: 'Python',
    duration: 2,
    emoji: '🐍',
    desc: 'Learn Python from scratch — from basics to data handling and simple automation.',
    tags: ['Programming', 'Data'],
    prerequisites: ['Basic programming helps (not required)', 'Laptop'],
    outline: [
      { day: 1, topics: ['Basics', 'Functions', 'Files'] },
      { day: 2, topics: ['NumPy', 'Pandas', 'Mini project'] },
    ],
    tnc: 'You need a lab setup. Minimum participants required. Schedule may change.',
  },

  2: {
    id: 2,
    name: 'Scilab',
    duration: 3,
    emoji: '📐',
    desc: 'Numerical computing and simulation for engineers.',
    tags: ['Engineering'],
    prerequisites: ['Basic math'],
    outline: [
      { day: 1, topics: ['Basics', 'Matrices'] },
      { day: 2, topics: ['Signals', 'Systems'] },
      { day: 3, topics: ['Projects'] },
    ],
    tnc: 'Scilab must be installed in lab.',
  },

  // keep others SAME (no need to rewrite all unless you want)
};

export default function WorkshopDetailsPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const workshop = WORKSHOPS[parseInt(id)];

  if (!workshop) {
    return (
      <div className="container center">
        <h2>Not found</h2>
        <Link to="/workshop-types" className="btn">Go back</Link>
      </div>
    );
  }

  return (
    <div className="wd-page">
      <div className="container">

        {/* TOP */}
        <div className="wd-top">
          <button onClick={() => navigate(-1)} className="back-btn">
            ← Back
          </button>

          <div className="wd-header">
            <span className="wd-emoji">{workshop.emoji}</span>
            <div>
              <h1>{workshop.name}</h1>
              <p className="wd-sub">
                {workshop.duration} day workshop • Free • IIT Bombay
              </p>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="wd-card">
          <h3>About</h3>
          <p>{workshop.desc}</p>
        </div>

        {/* PREREQUISITES */}
        <div className="wd-card">
          <h3>Before you join</h3>
          <ul>
            {workshop.prerequisites.map(p => (
              <li key={p}>• {p}</li>
            ))}
          </ul>
        </div>

        {/* OUTLINE */}
        <div className="wd-card">
          <h3>What you’ll learn</h3>

          {workshop.outline.map(day => (
            <div key={day.day} className="wd-day">
              <strong>Day {day.day}</strong>
              <ul>
                {day.topics.map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="wd-card wd-cta">
          {user ? (
            <Link to="/propose" className="btn btn-primary">
              Propose this workshop
            </Link>
          ) : (
            <>
              <p>Login to request this workshop for your college</p>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
