import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';

import Header from './components/Header';
import HomePage from './pages/HomePage';
import AlgorithmsPage from './pages/AlgorithmsPage'; 
import VisualizationPage from "./pages/VisualizationPage";
import AboutPage from './pages/AboutPage';

// 1. Thêm dòng import này
import AlgorithmEditorPage from './pages/AlgorithmEditorPage';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/algorithms" element={<AlgorithmsPage />} />
          <Route path="/algorithms/:algo" element={<VisualizationPage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* 2. Thêm Route cho trang Sandbox tại đây */}
          <Route path="/sandbox" element={<AlgorithmEditorPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;