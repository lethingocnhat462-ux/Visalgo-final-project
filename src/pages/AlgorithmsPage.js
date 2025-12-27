import React from 'react';
import { Link } from 'react-router-dom';
import { FaLayerGroup, FaSortAmountUp, FaMagic } from 'react-icons/fa';
import './AlgorithmsPage.css'; 

const AlgorithmsPage = () => {
  const algos = [
    { id: 'bubble', name: 'Bubble Sort', desc: 'Sắp xếp nổi bọt', icon: <FaLayerGroup /> },
    { id: 'insertion', name: 'Insertion Sort', desc: 'Sắp xếp chèn', icon: <FaSortAmountUp /> },
    { id: 'merge', name: 'Merge Sort', desc: 'Sắp xếp trộn', icon: <FaMagic /> }
  ];

  return (
    <div className="algo-page-container">
      <div className="algo-header-section">
        <span className="algo-badge">Học thuật toán</span>
        <h1 className="algo-page-title">Thư viện Thuật toán</h1>
        <p className="algo-page-subtitle">Chọn một thuật toán bên dưới để bắt đầu mô phỏng trực quan.</p>
      </div>

      <div className="algo-card-grid">
        {algos.map((algo) => (
          <div key={algo.id} className="algo-glass-card">
            <div className="algo-card-icon">{algo.icon}</div>
            <h3>{algo.name}</h3>
            <p>{algo.desc}</p>
            {/* SỬA QUAN TRỌNG: to={`/algorithms/${algo.id}`} để khớp với App.js */}
            <Link to={`/algorithms/${algo.id}`} className="algo-view-btn">
              Xem trực quan <span>→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlgorithmsPage;