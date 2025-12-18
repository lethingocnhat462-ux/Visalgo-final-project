import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Header from './components/Header'; // Bạn sẽ tạo file này ở bước 3

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header sẽ luôn hiển thị ở mọi trang */}
        <Header /> 
        
        <main style={{ padding: '40px' }}>
          <Routes>
            {/* Trang chủ hiển thị tiêu đề và nút bấm hiện tại của bạn */}
            <Route path="/" element={
              <div>
                <h1>VisAlgo</h1>
                <p>Algorithm Sorting Visualizer</p>
                <div style={{ marginTop: '20px' }}>
                  <button className="btn btn-primary">Start</button>
                  <button className="btn btn-secondary" style={{ marginLeft: '10px' }}>Reset</button>
                </div>
              </div>
            } />
            
            {/* Đường dẫn cho trang About của Thành viên 2 */}
            <Route path="/about" element={<h1>About Page</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;