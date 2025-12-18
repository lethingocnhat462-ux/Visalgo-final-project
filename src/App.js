import React from 'react';
import './styles/index.css'; // Kết nối tới file CSS bạn đã sửa

function App() {
  return (
    <div style={{ padding: '40px' }}>
      <h1>VisAlgo</h1>
      <p>Algorithm Sorting Visualizer</p>
      
      {/* ĐÂY MỚI LÀ NƠI ĐẶT NÚT BẤM */}
      <div style={{ marginTop: '20px' }}>
        <button className="btn btn-primary">Start</button>
        <button className="btn btn-secondary" style={{ marginLeft: '10px' }}>Reset</button>
      </div>
    </div>
  );
}

export default App;