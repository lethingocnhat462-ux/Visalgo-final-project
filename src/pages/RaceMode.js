import React, { useState, useEffect } from 'react';
import Visualizer from '../components/Visualizer'; // Sử dụng lại Component Visualizer bạn đã có
import { bubbleSortSteps } from '../algorithms/bubbleSort';
import { insertionSortSteps } from '../algorithms/insertionSort';
import { useTranslation } from 'react-i18next';


const RaceMode = ({ inputArray }) => {
  // State cho thuật toán bên trái và bên phải
  const [algo1, setAlgo1] = useState('bubble');
  const [algo2, setAlgo2] = useState('insertion');
  
  // State chứa các bước chạy riêng biệt
  const [steps1, setSteps1] = useState([]);
  const [steps2, setSteps2] = useState([]);

  // Khi mảng đầu vào hoặc thuật toán thay đổi, tạo lại các bước chạy
  useEffect(() => {
    const arr = inputArray.split(",").map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    if (arr.length === 0) return;

    // Khởi tạo steps cho máy 1
    if (algo1 === 'bubble') setSteps1(bubbleSortSteps([...arr]));
    else if (algo1 === 'insertion') setSteps1(insertionSortSteps([...arr]));

    // Khởi tạo steps cho máy 2
    if (algo2 === 'bubble') setSteps2(bubbleSortSteps([...arr]));
    else if (algo2 === 'insertion') setSteps2(insertionSortSteps([...arr]));
  }, [inputArray, algo1, algo2]);

  return (
    <div className="race-mode-container">
      {/* Cột đường đua 1 */}
      <div className="race-track">
        <div className="race-header">
          <select value={algo1} onChange={(e) => setAlgo1(e.target.value)} className="styled-select">
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="merge">Merge Sort</option>
          </select>
        </div>
        <Visualizer steps={steps1} algoKey={algo1} />
      </div>

      <div className="vs-divider">VS</div>

      {/* Cột đường đua 2 */}
      <div className="race-track">
        <div className="race-header">
          <select value={algo2} onChange={(e) => setAlgo2(e.target.value)} className="styled-select">
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="merge">Merge Sort</option>
          </select>
        </div>
        <Visualizer steps={steps2} algoKey={algo2} />
      </div>
    </div>
  );
};

export default RaceMode;