// src/components/Bar.js
import React from 'react';

const Bar = ({ value, status, maxValue }) => {
  const getStatusClass = () => {
    if (status === 'comparing' || status === 'swapping') return 'processing';
    if (status === 'sorted') return 'completed';
    return '';
  };

  // QUAN TRỌNG: Tính tỷ lệ phần trăm riêng cho từng cột
  // safeMaxValue đảm bảo không chia cho 0. 
  // Chúng ta dùng Math.max(..., 5) để cột nhỏ nhất vẫn nhìn thấy được.
  const safeMaxValue = maxValue && maxValue > 0 ? maxValue : 100;
  const heightPercent = Math.max((value / safeMaxValue) * 85, 5); 

  return (
  <div className="bar-wrapper"> 
    <div className={`bar ${getStatusClass()}`} 
         style={{ 
           height: `${heightPercent}%`, 
           transition: 'height 0.4s ease-in-out',
           width: '100%',
           position: 'relative' // Bỏ backgroundColor ở đây để CSS xử lý
         }}>
      <span className="value-top" style={{ position: 'absolute', top: '-25px', width: '100%', textAlign: 'center', color: '#4facfe' }}>
        {value}
      </span>
    </div>
    <span className="value-bottom" style={{ marginTop: '10px', fontWeight: 'bold', color: '#333' }}>
      {value}
    </span>
  </div>
);
};

export default Bar;