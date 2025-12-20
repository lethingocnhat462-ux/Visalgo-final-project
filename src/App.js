import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
// Sửa tên hàm import cho đúng với file trong algorithms
import { bubbleSort } from './algorithms/bubbleSort'; 
import { insertionSort } from './algorithms/insertionSort';
import { mergeSort } from './algorithms/mergeSort';

function App() {
  

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main style={{ padding: '40px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/algorithms" element={<h1>Algorithms Page</h1>} />
            <Route path="/about" element={<h1>About Page</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;