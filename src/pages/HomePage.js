import React from 'react';
import { Link } from 'react-router-dom';

const WORKSHOP_TYPES = [
  { id: 1, name: 'Python', duration: 2 },
  { id: 2, name: 'Scilab', duration: 3 },
  { id: 3, name: 'OpenFOAM', duration: 5 },
  { id: 4, name: 'DWSIM', duration: 2 },
];

export default function HomePage() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>

      <h1>Workshop Booking Portal</h1>

      <p style={{ marginBottom: "20px" }}>
        Browse and register for workshops conducted by FOSSEE.
      </p>

      <Link 
        to="/workshop-types" 
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px"
        }}
      >
        View All Workshops
      </Link>

      <h2 style={{ marginTop: "40px" }}>Popular Workshops</h2>

      {WORKSHOP_TYPES.map((w) => (
        <div 
          key={w.id} 
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginTop: "10px",
            borderRadius: "5px"
          }}
        >
          <h3>{w.name}</h3>
          <p>Duration: {w.duration} days</p>
        </div>
      ))}

    </div>
  );
}
