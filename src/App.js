import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AlgorithmsPage from './pages/AlgorithmsPage'; // 1. Import trang mới
import VisualizationPage from "./pages/VisualizationPage";
import AboutPage from './pages/AboutPage';

function App() {
  return (
    
      <Router basename="/Visalgo-final-project">
      <div className="app-container">
        <Header />
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* 2. SỬA TẠI ĐÂY: Thay Navigate bằng AlgorithmsPage */}
            <Route path="/algorithms" element={<AlgorithmsPage />} />
            
            <Route path="/algorithms/:algo" element={<VisualizationPage />} />
            
           <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;