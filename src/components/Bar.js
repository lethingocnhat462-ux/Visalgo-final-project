import React from 'react';
import '../styles/Bar.css'; // Chúng ta sẽ tạo file CSS ở bước sau

const Bar = ({ value, status }) => {
  // Hàm để xác định màu sắc dựa trên trạng thái (status) từ thuật toán
  const getBarColor = () => {
    switch (status) {
      case 'comparing':
        return '#ef4444'; // Màu đỏ khi đang so sánh
      case 'swapping':
        return '#f59e0b'; // Màu vàng khi đang hoán đổi
      case 'sorted':
        return '#10b981'; // Màu xanh lá khi đã vào đúng vị trí
      default:
        return '#3b82f6'; // Màu xanh dương mặc định (trạng thái chờ)
    }
  };

  const barStyle = {
    height: `${value}px`, // Chiều cao tỉ lệ thuận với giá trị số
    backgroundColor: getBarColor(),
    transition: 'all 0.2s ease-in-out', // Hiệu ứng mượt mà khi đổi màu/đổi chiều cao
  };

  return (
    <div className="bar-container">
      <div className="bar-column" style={barStyle}>
        <span className="bar-value">{value}</span>
      </div>
    </div>
  );
};

export default Bar;