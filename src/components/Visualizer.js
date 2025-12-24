import React, { useState, useEffect } from 'react';
import Bar from './Bar';

const Visualizer = ({ steps, speed = 300 }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
    // Tự động chạy khi isPlaying = true và chưa tới bước cuối cùng
    if (isPlaying && currentStep < steps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, speed);
    } else if (currentStep === steps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer); // Xóa timer để tránh rò rỉ bộ nhớ
  }, [isPlaying, currentStep, steps, speed]);

  // Lấy dữ liệu mảng và trạng thái màu sắc tại bước hiện tại
  const { array, highlights, type } = steps[currentStep] || steps[0];
  const maxValue = Math.max(...array);

  return (
    <div className="visualizer-container">
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
      <div className="controls">
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Tạm dừng' : 'Bắt đầu chạy'}
        </button>
        <button onClick={() => setCurrentStep(0)}>Khởi tạo lại</button>
      </div>
    </div>
  );
};