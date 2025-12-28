import React from 'react';
import { Link } from 'react-router-dom';
import { FaLayerGroup, FaSortAmountUp, FaMagic } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; // 1. Thêm dòng này
import './AlgorithmsPage.css'; 

const AlgorithmsPage = () => {
  const { t } = useTranslation(); // 2. Khai báo hàm t

  // 3. Cập nhật mảng algos để dùng hàm t cho phần mô tả
  const algos = [
    { id: 'bubble', name: 'Bubble Sort', desc: t('bubble_sort'), icon: <FaLayerGroup /> },
    { id: 'insertion', name: 'Insertion Sort', desc: t('insertion_sort'), icon: <FaSortAmountUp /> },
    { id: 'merge', name: 'Merge Sort', desc: t('merge_sort'), icon: <FaMagic /> }
  ];

  return (
    <div className="algo-page-container">
      <div className="algo-header-section">
        {/* 4. Thay chữ bằng hàm t() */}
        <span className="algo-badge">{t('nav_algo')}</span>
        <h1 className="algo-page-title">{t('algo_list_title')}</h1>
        <p className="algo-page-subtitle">{t('hero_subtitle')}</p>
      </div>

      <div className="algo-card-grid">
        {algos.map((algo) => (
          <div key={algo.id} className="algo-glass-card">
            <div className="algo-card-icon">{algo.icon}</div>
            <h3>{algo.name}</h3>
            <p>{algo.desc}</p>
            <Link to={`/algorithms/${algo.id}`} className="algo-view-btn">
              {t('get_started')} <span>→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlgorithmsPage;