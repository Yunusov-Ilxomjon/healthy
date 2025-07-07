import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header-container">
      <div className="header-nav">
        <div className="header-logo">
          <a href="/">
            <img src="/nav-logo.jpg" alt="logo" />
          </a>
        </div>

        <div className={`header-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a className='header-links-a' href="/">Biz haqimizda</a></li>
            <li><a className='header-links-a' href="/">Mahsulotlar</a></li>
            <li><a className='header-links-a' href="/">Xizmatlar</a></li>
            <li><a className='header-links-a' href="/">Aloqa</a></li>
            <li><a className='header-links-a' href="/">O'rnatish</a></li>
          </ul>
        </div>

        <select className='lang'>
          <option>UZB</option>
          <option>RUS</option>
          <option>ENG</option>
        </select>

        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={handleToggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {menuOpen && <div className="backdrop" onClick={closeMenu}></div>}

      <div className='section-img'>
        <img src="/sectoin-pic.jpg" alt="section" />
      </div>
    </div>
  );
}

export default App;
