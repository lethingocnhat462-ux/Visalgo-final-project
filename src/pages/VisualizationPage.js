import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Bar from "../components/Bar";
import { bubbleSortSteps } from '../algorithms/bubbleSort';
import { insertionSortSteps } from '../algorithms/insertionSort';
import { mergeSortSteps } from '../algorithms/mergeSort';
import './VisualizationPage.css'; 
import { ALGO_INFO } from '../constants/algorithmData';

// Component con hiển thị Độ phức tạp
const ComplexityCard = ({ algoKey }) => {
  const info = ALGO_INFO[algoKey] || ALGO_INFO.bubble;
  return (
    <div className="complexity-card-styled">
      <h3>📊 Phân tích độ phức tạp: {info.name}</h3>
      <div className="complexity-grid">
        <div className="comp-item"><strong>Worst Case:</strong> <code>{info.worstCase}</code></div>
        <div className="comp-item"><strong>Best Case:</strong> <code>{info.bestCase}</code></div>
        <div className="comp-item"><strong>Space:</strong> <code>{info.spaceComplexity}</code></div>
      </div>
      <p className="algo-desc"><em>{info.description}</em></p>
    </div>
  );
};

// Component con hiển thị Mã giả
const PseudocodeCard = ({ algoKey }) => {
  const info = ALGO_INFO[algoKey] || ALGO_INFO.bubble;
  return (
    <div className="pseudocode-card">
      <h3>💻 Mã giả (Pseudocode)</h3>
      <div className="code-container">
        {info.pseudocode?.map((line, index) => (
          <div key={index} className="code-line">
            <span className="line-number">{index + 1}</span>
            <pre className="code-text">{line}</pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function VisualizationPage() {
  const { algo } = useParams(); 
  const [inputArray, setInputArray] = useState("45, 20, 80, 50, 10, 30, 90, 60");
  const [array, setArray] = useState([45, 20, 80, 50, 10, 30, 90, 60]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(400); 
  
  const intervalRef = useRef(null);
  const maxValue = array.length > 0 ? Math.max(...array) : 100;

  useEffect(() => {
    handleStart();
    return () => clearInterval(intervalRef.current);
  }, [algo]);

  const handleStart = () => {
    const arr = inputArray.split(",").map(n => parseInt(n.trim())).filter(n => !isNaN(n));
    if (arr.length === 0) return;
    setArray(arr);
    setIsPlaying(false);
    clearInterval(intervalRef.current);

    let result = [];
    if (algo === "bubble") result = bubbleSortSteps([...arr]);
    else if (algo === "insertion") result = insertionSortSteps([...arr]);
    else if (algo === "merge") result = mergeSortSteps([...arr]);

    setSteps(result);
    setCurrentStep(-1);
  };

  const nextStep = useCallback(() => {
    setCurrentStep((prev) => {
      if (prev < steps.length - 1) {
        const nextIdx = prev + 1;
        setArray(steps[nextIdx].array);
        return nextIdx;
      }
      setIsPlaying(false);
      return prev;
    });
  }, [steps]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(nextStep, speed);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isPlaying, nextStep, speed]);

  const currentData = currentStep >= 0 ? steps[currentStep] : {};

  return (
    <div className="visual-page">
      <div className="bg-overlay"></div>
      <div className="content-container">
        <h1 className="algo-display-title">Thuật toán: {algo?.toUpperCase()}</h1>

        <div className="toolbar-card">
          <div className="input-group">
            <span className="label-text">Mảng:</span>
            <input
              value={inputArray}
              onChange={(e) => setInputArray(e.target.value)}
              className="styled-input"
            />
          </div>

          <div className="speed-group">
            <span className="label-text">Tốc độ: {speed}ms</span>
            <input 
              type="range" min="50" max="1500" step="50"
              value={speed} onChange={(e) => setSpeed(Number(e.target.value))}
              className="speed-slider"
            />
          </div>
          
          <div className="button-group">
            <button onClick={handleStart} className="btn-init">Khởi tạo</button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)} 
              className={`btn-run ${isPlaying ? 'playing' : ''}`}
            >
              {isPlaying ? "Tạm dừng" : "Bắt đầu chạy"}
            </button>
          </div>
        </div>

        <div className="visual-box">
          {array.map((value, index) => {
            let status = "default";
            const isActive = currentData.indices?.includes(index);
            if (isActive) status = currentData.status; 
            if (currentData.sortedIndices?.includes(index)) status = "sorted";
            return <Bar key={index} value={value} status={status} maxValue={maxValue} />;
          })}
        </div>

        <div className="step-description-card">
          <span className="emoji">💡</span>
          <p>{currentData.description || "Nhập mảng và nhấn Bắt đầu để khám phá thuật toán"}</p>
        </div>

        {/* HIỂN THỊ MÃ GIẢ VÀ ĐỘ PHỨC TẠP */}
        <div className="info-section">
           <PseudocodeCard algoKey={algo} />
           <ComplexityCard algoKey={algo} />
        </div>
      </div>
    </div>
  );
}