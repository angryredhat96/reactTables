import React from 'react';
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <div className="menu">
          {/* <li><a href="/">⏰</a></li> */}
          <li><a href="/">Time</a></li>
          {/* <li><a href="/second">📆</a></li> */}
          <li><a href="/second">Date</a></li>
        </div>
      </ul>
    </nav>
  );
}
