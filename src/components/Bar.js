import React from 'react';

const Bar = ({ value, status, maxValue }) => {
  const getStatusClass = () => {
    if (status === 'comparing' || status === 'swapping') return 'processing';
    if (status === 'sorted') return 'completed';
    return '';
  };

  const safeMaxValue = maxValue && maxValue > 0 ? maxValue : 100;
  const ratio = value / safeMaxValue;
  const scaledRatio = Math.pow(ratio, 1.5); 

  // Tăng chiều cao tối đa lên 90% để tận dụng không gian
  const heightPercent = Math.max(scaledRatio * 90, 8); 

  return (
    <div className="bar-wrapper" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-end', 
      height: '100%', 
      flex: 1,
      position: 'relative', // Để định vị số trên đầu chuẩn hơn
      paddingBottom: '30px' // Tạo khoảng trống cố định cho số dưới chân
    }}> 
      <div 
        className={`bar ${getStatusClass()}`} 
        style={{ 
          height: `${heightPercent}%`, 
          transition: 'height 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', // Hiệu ứng nảy (elastic) nhẹ
          width: '100%',
          position: 'relative',
          borderRadius: '6px 6px 2px 2px'
        }}
      >
        {/* Giá trị trên đầu cột - Dùng absolute để không chiếm diện tích thực */}
        <span className="value-top" style={{ 
          position: 'absolute', 
          top: '-25px', 
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%', 
          textAlign: 'center', 
          color: '#3b82f6', 
          fontSize: '0.85rem',
          fontWeight: '700'
        }}>
          {value}
        </span>
      </div>
      
      {/* Giá trị dưới chân cột - Cố định vị trí */}
      <span className="value-bottom" style={{ 
        position: 'absolute',
        bottom: '5px',
        fontWeight: '600', 
        color: '#64748b', 
        fontSize: '0.75rem'
      }}>
        {value}
      </span>
    </div>
  );
};

export default Bar;