import React from 'react';

const Bar = ({ value, status, maxValue }) => {
  const getStatusClass = () => {
    if (status === 'comparing' || status === 'swapping') return 'processing';
    if (status === 'sorted') return 'completed';
    return '';
  };

  // 1. Đảm bảo maxValue luôn chuẩn
  const safeMaxValue = maxValue && maxValue > 0 ? maxValue : 100;

  // 2. Kỹ thuật Scaling để tạo chênh lệch rõ rệt:
  // Thay vì (value / safeMaxValue), ta dùng bình phương tỷ lệ này.
  // Điều này khiến số lớn cực kỳ cao và số nhỏ cực kỳ thấp.
  const ratio = value / safeMaxValue;
  const scaledRatio = Math.pow(ratio, 1.5); // Bạn có thể chỉnh 1.5 lên 2 để chênh lệch mạnh hơn nữa

  // 3. Tính toán heightPercent cuối cùng (tối đa 85%, tối thiểu 8% để nhìn thấy cột)
  const heightPercent = Math.max(scaledRatio * 85, 8); 

  return (
  <div className="bar-wrapper" style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'flex-end', // QUAN TRỌNG: Đẩy thanh bar xuống đáy wrapper
    height: '100%', 
    flex: 1, 
    padding: '0 2px'
  }}> 
    <div 
      className={`bar ${getStatusClass()}`} 
      style={{ 
        height: `${heightPercent}%`, 
        transition: 'height 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
        width: '100%',
        position: 'relative',
        borderRadius: '4px 4px 0 0'
      }}
    >
      {/* Giá trị trên đầu cột */}
      <span className="value-top" style={{ 
        position: 'absolute', 
        top: '-25px', 
        width: '100%', 
        textAlign: 'center', 
        color: '#60a5fa', 
        fontSize: '0.8rem',
        fontWeight: 'bold'
      }}>
        {value}
      </span>
    </div>
    
    {/* Giá trị dưới chân cột */}
    <span className="value-bottom" style={{ 
      marginTop: '8px', 
      fontWeight: '500', 
      color: '#94a3b8', 
      fontSize: '0.75rem',
      flexShrink: 0 // Đảm bảo text không bị mất khi cột quá cao
    }}>
      {value}
    </span>
  </div>
);
}
export default Bar;