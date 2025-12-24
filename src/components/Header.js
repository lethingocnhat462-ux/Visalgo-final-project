import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
// Dòng này sẽ lấy file ảnh bạn vừa bỏ vào thư mục components
import logoImg from './logo.png'; 

const Header = () => {
  return (
    <header className="main-header">
      {/* Nhóm logo và chữ vào một div để dễ căn chỉnh */}
      <div className="logo-wrapper">
        <img src={logoImg} alt="Logo" className="nav-logo" />
        <span className="logo-text">Vis Algo</span>
      </div>

      <nav className="nav-container">
        <ul className="nav-links">
          <li><NavLink to="/" end>Trang chủ</NavLink></li>
          <li className="dropdown">
            <span className="dropbtn">Thuật toán ▼</span>
            <div className="dropdown-menu">
              <NavLink to="/algorithms/bubble">Bubble Sort</NavLink>
              <NavLink to="/algorithms/insertion">Insertion Sort</NavLink>
              <NavLink to="/algorithms/merge">Merge Sort</NavLink>
            </div>
          </li>
          <li><NavLink to="/about">Giới thiệu</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;