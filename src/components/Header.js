import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useTranslation } from 'react-i18next';
import logoImg from './logo.png'; 

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="main-header">
      <div className="logo-wrapper">
        <img src={logoImg} alt="Logo" className="nav-logo" />
        <span className="logo-text">Vis Algo</span>
      </div>

      <nav className="nav-container">
        <ul className="nav-links">
          <li><NavLink to="/" end>{t('nav_home')}</NavLink></li>
          
          <li className="dropdown">
            <span className="dropbtn">{t('nav_algo')} ▼</span>
            <div className="dropdown-menu">
              <NavLink to="/algorithms/bubble">{t('bubble_sort')}</NavLink>
              <NavLink to="/algorithms/insertion">{t('insertion_sort')}</NavLink>
              <NavLink to="/algorithms/merge">{t('merge_sort')}</NavLink>
            </div>
          </li>

          {/* MỚI: Thêm link dẫn đến trang Sandbox */}
          <li>
            <NavLink to="/sandbox" className="sandbox-link">
              Sandbox 
            </NavLink>
          </li>

          <li><NavLink to="/about">{t('nav_team')}</NavLink></li>
          
          <div className="lang-switcher">
            <button 
              className={i18n.language === 'vi' ? 'active' : ''} 
              onClick={() => changeLanguage('vi')}
            >
              VI
            </button>
            <span className="divider">|</span>
            <button 
              className={i18n.language === 'en' ? 'active' : ''} 
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;