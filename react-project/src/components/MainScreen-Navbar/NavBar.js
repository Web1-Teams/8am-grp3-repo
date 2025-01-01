import React, { useState } from 'react';
import './mainScreen-navbar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSetMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="main-header">
      <h1>Edujoy</h1>

      <nav id="main-nav">
        <div className="menu" onClick={handleSetMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={menuOpen ? 'menu-open' : ''}>
          <li className="nav-item">
            <Link to="/MainScreen" className="nav-links">
              الرئيسية <i className="fas fa-home"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/MainScreen" className="nav-links">
              الكورسات <i className="fas fa-book"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/MainScreen" className="nav-links">
              من نحن <i className="fas fa-users"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              اتصل بنا <i className="fas fa-phone"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;