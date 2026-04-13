import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      padding: "15px 30px",
      borderBottom: "1px solid #e5e5e5",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#ffffff"
    }}>
      
      <h2 style={{ margin: 0, fontSize: "20px" }}>
        FOSSEE Workshops
      </h2>

      <div>
        <Link 
          to="/" 
          style={{ marginRight: "20px", textDecoration: "none", color: "#333" }}
        >
          Home
        </Link>

        <Link 
          to="/workshop-types" 
          style={{ textDecoration: "none", color: "#333" }}
        >
          Workshops
        </Link>
      </div>

    </nav>
  );
}
