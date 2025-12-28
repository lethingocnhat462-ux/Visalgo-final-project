import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import { ALGO_INFO } from '../constants/algorithmData';
import { useTranslation } from 'react-i18next';

const Visualizer = ({ steps = [], speed = 300, algoKey = 'bubble' }) => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset khi đổi thuật toán hoặc mảng mới
  useEffect(() => {
    setCurrentStep(0);
    setIsPlaying(false);
  }, [steps]);

  useEffect(() => {
    let timer;
    if (isPlaying && currentStep < steps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, speed);
    } else if (currentStep >= steps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, steps, speed]);

  // Kiểm tra dữ liệu an toàn
  if (!steps || steps.length === 0) {
    return <div className="loading-text">{t('loading_race')}</div>; 
  }
  
  const currentData = steps[currentStep] || steps[0];
  const { array = [], highlights = [], type = 'default' } = currentData;
  const maxValue = array.length > 0 ? Math.max(...array) : 100;

  return (
    <div className="visualizer-container">
      <div className="visual-box">
        {array.map((val, idx) => (
          <Bar 
            key={idx} 
            value={val} 
            maxValue={maxValue}
            status={highlights.includes(idx) ? type : 'default'} 
          />
        ))}
      </div>

      <div className="button-group" style={{ marginTop: '30px' }}>
        <button 
          className={`btn-run ${isPlaying ? 'playing' : ''}`} 
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <span>{isPlaying ? '⏸' : '▶️'}</span>
          {isPlaying ? t('stop') : t('start')} 
        </button>
        <button className="btn-init" onClick={() => setCurrentStep(0)}>
          <span>🔄</span> {t('restart')}
        </button>
      </div>

      <div className="info-section">
         <ComplexityCard algoKey={algoKey} />
      </div>
    </div>
  );
};

const ComplexityCard = ({ algoKey }) => {
  const { t } = useTranslation(); 
  const info = ALGO_INFO[algoKey] || ALGO_INFO.bubble;
  
  return (
    <div className="complexity-card-styled">
      <h3 className="card-title">📊 {t('complexity_title')}: {t(algoKey)}</h3> 
      
      <div className="complexity-grid">
        <div className="comp-item">
          <span className="comp-label">{t('worst_case')}:</span>
          <code className="code-badge worst">{info.worstCase}</code>
        </div>
        <div className="comp-item">
          <span className="comp-label">{t('best_case')}:</span>
          <code className="code-badge best">{info.bestCase}</code>
        </div>
        <div className="comp-item">
          <span className="comp-label">{t('space_complexity')}:</span>
          <code className="code-badge space">{info.spaceComplexity}</code>
        </div>
      </div>
      <p className="algo-desc">
        <strong>{t('description_label')}:</strong> {t(`${algoKey}_desc_detail`)}
      </p>
    </div>
  );
};

export default Visualizer;