import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

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
};

export default function WorkshopDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const workshop = WORKSHOPS[parseInt(id)];

  if (!workshop) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h2>Workshop not found</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          The workshop you’re looking for doesn’t exist.
        </p>
        <Link to="/workshop-types" className="btn btn-outline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="wd-page">
      <div className="container">

        {/* BACK BUTTON */}
        <button onClick={() => navigate(-1)} className="btn btn-outline" style={{ marginBottom: 20 }}>
          ← Back
        </button>

        {/* HEADER */}
        <div className="card" style={{ padding: '24px', marginBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontSize: 42 }}>{workshop.emoji}</span>

            <div>
              <h1 style={{ marginBottom: 6 }}>
                {workshop.name} Workshop
              </h1>

              <p style={{ color: 'var(--text-secondary)', fontSize: 14 }}>
                {workshop.duration} day workshop • Free • IIT Bombay
              </p>

              <div style={{ marginTop: 8, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {workshop.tags.map(tag => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="card" style={{ padding: 20, marginBottom: 20 }}>
          <h3 style={{ marginBottom: 10 }}>About</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            {workshop.desc}
          </p>
        </div>

        {/* PREREQUISITES */}
        <div className="card" style={{ padding: 20, marginBottom: 20 }}>
          <h3 style={{ marginBottom: 10 }}>Before you join</h3>

          <ul style={{ paddingLeft: 18, color: 'var(--text-secondary)' }}>
            {workshop.prerequisites.map(item => (
              <li key={item} style={{ marginBottom: 6 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* OUTLINE */}
        <div className="card" style={{ padding: 20, marginBottom: 20 }}>
          <h3 style={{ marginBottom: 10 }}>What you’ll learn</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {workshop.outline.map(day => (
              <div key={day.day}>
                <strong style={{ color: 'var(--text-primary)' }}>
                  Day {day.day}
                </strong>

                <ul style={{ paddingLeft: 18, color: 'var(--text-secondary)', marginTop: 6 }}>
                  {day.topics.map(topic => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="card" style={{ padding: 20, textAlign: 'center' }}>
          <p style={{ marginBottom: 12, color: 'var(--text-secondary)' }}>
            Want this workshop in your college?
          </p>

          <Link to="/propose" className="btn btn-primary">
            Propose Workshop
          </Link>
        </div>

      </div>
    </div>
  );
}
