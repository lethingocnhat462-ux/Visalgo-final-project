import React, { useState, useEffect } from 'react';
import Bar from './Bar';
import { ALGO_INFO } from '../constants/algorithmData';

// Thêm algoKey vào props để nhận biết thuật toán đang chọn (ví dụ: 'bubble', 'selection', 'insertion')
const Visualizer = ({ steps, speed = 300, algoKey = 'bubble' }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Reset bước về 0 khi đổi thuật toán mới
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

  // Lấy dữ liệu tại bước hiện tại
  const currentData = steps[currentStep] || steps[0];
  const { array, highlights, type } = currentData;
  const maxValue = Math.max(...array);

  return (
    <div className="visualizer-container">
      {/* 1. Vùng hiển thị các cột */}
      <div className="bars-display">
        {array.map((val, idx) => (
          <Bar 
            key={idx} 
            value={val} 
            maxValue={maxValue}
            status={highlights.includes(idx) ? type : 'default'} 
          />
        ))}
      </div>

      {/* 2. Điều khiển */}
      <div className="controls" style={{ margin: '20px 0' }}>
        <button className="btn-play" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Tạm dừng' : 'Bắt đầu chạy'}
        </button>
        <button className="btn-reset" onClick={() => setCurrentStep(0)}>Khởi tạo lại</button>
      </div>

      <hr />

      {/* 3. Hiển thị bảng độ phức tạp tương ứng với algoKey */}
      <ComplexityCard algoKey={algoKey} />
    </div>
  );
};

// Component hiển thị chi tiết độ phức tạp
const ComplexityCard = ({ algoKey }) => {
  // Tìm thông tin trong file constants, nếu không thấy thì mặc định lấy bubble
  const info = ALGO_INFO[algoKey] || ALGO_INFO.bubble;
  
  return (
    <div className="complexity-card" style={{ 
      padding: '20px', 
      marginTop: '20px', 
      borderRadius: '12px', 
      backgroundColor: '#f8f9fa',
      borderLeft: '6px solid #4facfe',
      textAlign: 'left'
    }}>
      <h3 style={{ color: '#333', marginBottom: '15px' }}>
        💡 Phân tích: {info.name}
      </h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px 0' }}><strong>Worst Case (Xấu nhất):</strong></td>
            <td><code style={{ color: '#e91e63', fontWeight: 'bold' }}>{info.worstCase}</code></td>
          </tr>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '10px 0' }}><strong>Best Case (Tốt nhất):</strong></td>
            <td><code style={{ color: '#4caf50', fontWeight: 'bold' }}>{info.bestCase}</code></td>
          </tr>
          <tr>
            <td style={{ padding: '10px 0' }}><strong>Độ phức tạp không gian:</strong></td>
            <td><code style={{ color: '#2196f3', fontWeight: 'bold' }}>{info.spaceComplexity}</code></td>
          </tr>
        </tbody>
      </table>
      <p style={{ marginTop: '15px', color: '#666', lineHeight: '1.5' }}>
        <strong>Mô tả:</strong> {info.description}
      </p>
    </div>
  );
};

export default Visualizer;