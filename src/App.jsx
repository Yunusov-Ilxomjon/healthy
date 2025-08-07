import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleChangeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="header-container">
      <div className="header-nav">
        <div className="header-logo">
          <a href="/">
            <img width={200} src="/nav-logo.png" alt="logo" />
          </a>
        </div>

        <div className={`header-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a className='header-links-a' href="#about">{t('nav.about')}</a></li>
            <li><a className='header-links-a' href="#product">{t('nav.products')}</a></li>
            <li><a className='header-links-a' href="#service">{t('nav.services')}</a></li>
            <li><a className='header-links-a' href="#registr">{t('nav.contact')}</a></li>
            <li>
              <Link className='header-links-a' to="/">
              {t('nav.installation')}
            </Link></li>
          </ul>
        </div>

        <select className='lang' onChange={handleChangeLanguage} value={i18n.language}>
          <option value="uz">UZB</option>
          <option value="ru">RUS</option>
          <option value="en">ENG</option>
        </select>

        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={handleToggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {menuOpen && <div className="backdrop" onClick={closeMenu}></div>}

      <div className='section-img'>
      </div>
    </div>
  );
}

export default App;
