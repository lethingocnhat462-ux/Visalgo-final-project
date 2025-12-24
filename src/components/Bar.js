import React from 'react';

const Bar = ({ value, status }) => {
  const getStatusClass = () => {
    if (status === 'comparing' || status === 'swapping') return 'processing';
    if (status === 'sorted') return 'completed';
    return '';
  };

  return (
    <div className="bar-wrapper" style={{ transition: 'all 0.4s ease' }}>
      <div className={`bar ${getStatusClass()}`} 
           style={{ 
             height: `${value * 2.8}px`,
             boxShadow: '0 5px 15px rgba(0,0,0,0.1)' 
           }}>
        <span className="value-top">{value}</span>
      </div>
      <span className="value-bottom" style={{ fontWeight: 'bold', color: '#333' }}>{value}</span>
    </div>
  );
};

export default Bar;