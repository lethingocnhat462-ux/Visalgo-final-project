import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import { ALGO_INFO } from '../constants/algorithmData';

const Visualizer = ({ steps, speed = 300, algoKey = 'bubble' }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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
    } else if (currentStep === steps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, steps, speed]);

  const currentData = steps[currentStep] || steps[0];
  if (!currentData) {
  return <div className="loading-text">Đang chuẩn bị dữ liệu đua...</div>;
}
  const { array = [], highlights = [], type = 'default' } = currentData;
  const maxValue = Math.max(...array);

  return (
    <div className="visualizer-container">
      {/* 1. Vùng hiển thị các cột - Thẳng hàng nhờ visual-box */}
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

      {/* 2. Điều khiển - Sử dụng button-group đã tạo */}
      <div className="button-group" style={{ marginTop: '30px' }}>
        <button 
          className={`btn-run ${isPlaying ? 'playing' : ''}`} 
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <span>{isPlaying ? '⏸' : '▶️'}</span>
          {isPlaying ? 'Tạm dừng' : 'Bắt đầu chạy'}
        </button>
        <button className="btn-init" onClick={() => setCurrentStep(0)}>
          <span>🔄</span> Khởi tạo lại
        </button>
      </div>

      {/* 3. Hiển thị bảng độ phức tạp */}
      <div className="info-section">
         <ComplexityCard algoKey={algoKey} />
      </div>
    </div>
  );
};

const ComplexityCard = ({ algoKey }) => {
  const info = ALGO_INFO[algoKey] || ALGO_INFO.bubble;
  
  return (
    <div className="complexity-card-styled">
      <h3 className="card-title">📊 Phân tích: {info.name}</h3>
      <div className="complexity-grid">
        <div className="comp-item">
          <span className="comp-label">Worst Case:</span>
          <code className="code-badge worst">{info.worstCase}</code>
        </div>
        <div className="comp-item">
          <span className="comp-label">Best Case:</span>
          <code className="code-badge best">{info.bestCase}</code>
        </div>
        <div className="comp-item">
          <span className="comp-label">Space:</span>
          <code className="code-badge space">{info.spaceComplexity}</code>
        </div>
      </div>
      <p className="algo-desc">
        <strong>Mô tả:</strong> {info.description}
      </p>
    </div>
  );
};

export default Visualizer;