import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Bar from "../components/Bar";
import { bubbleSortSteps } from '../algorithms/bubbleSort';
import { insertionSortSteps } from '../algorithms/insertionSort';
import { mergeSortSteps } from '../algorithms/mergeSort';
import './VisualizationPage.css'; 
import { ALGO_INFO } from '../constants/algorithmData';
import RaceMode from './RaceMode'; 
import { useTranslation } from 'react-i18next';

// --- Component con hiển thị Độ phức tạp ---
const ComplexityCard = ({ algoKey }) => {
  const { t } = useTranslation();
  const info = ALGO_INFO[algoKey] || ALGO_INFO.bubble;
  
  return (
    <div className="complexity-card-styled">
      {/* Sử dụng key thuật toán để dịch tên (ví dụ: bubble -> Bubble Sort / Sắp xếp nổi bọt) */}
      <h3>📊 {t('complexity_title')}: {t(algoKey)}</h3>
      <div className="complexity-grid">
        <div className="comp-item">
          <strong>{t('worst_case')}:</strong> <code>{info.worstCase}</code>
        </div>
        <div className="comp-item">
          <strong>{t('best_case')}:</strong> <code>{info.bestCase}</code>
        </div>
        <div className="comp-item">
          <strong>{t('space_complexity')}:</strong> <code>{info.spaceComplexity}</code>
        </div>
      </div>
      {/* Hiển thị mô tả chi tiết từ file i18n */}
      <p className="algo-desc"><em>{t(`${algoKey}_desc_detail`)}</em></p>
    </div>
  );
};

// --- Component con hiển thị Mã giả ---
const PseudocodeCard = ({ algoKey }) => {
  const { t } = useTranslation();
  const info = ALGO_INFO[algoKey] || ALGO_INFO.bubble;
  
  return (
    <div className="pseudocode-card">
      <h3 className="card-title">💻 {t('pseudocode_title')}</h3>
      <div className="code-container">
        {info.pseudocode?.map((line, index) => (
          <div key={index} className="code-row">
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
  const { t } = useTranslation();
  
  const [inputArray, setInputArray] = useState("45, 20, 80, 50, 10, 30, 90, 60");
  const [array, setArray] = useState([45, 20, 80, 50, 10, 30, 90, 60]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(400); 
  const [isRaceMode, setIsRaceMode] = useState(false);

  const intervalRef = useRef(null);
  const maxValue = array.length > 0 ? Math.max(...array) : 100;

  const handleStart = useCallback(() => {
    const arr = inputArray.split(",")
      .map(n => parseInt(n.trim()))
      .filter(n => !isNaN(n));
      
    if (arr.length === 0) return;
    
    setArray(arr);
    setIsPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);

    let result = [];
    const tempArr = [...arr];
    if (algo === "bubble") result = bubbleSortSteps(tempArr);
    else if (algo === "insertion") result = insertionSortSteps(tempArr);
    else if (algo === "merge") result = mergeSortSteps(tempArr);

    setSteps(result);
    setCurrentStep(-1);
  }, [algo, inputArray]);

  useEffect(() => {
    handleStart();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [handleStart]);

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
        <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h1 className="algo-display-title">{t('nav_algo')}: {t(algo)}</h1>
            <button 
                onClick={() => setIsRaceMode(!isRaceMode)} 
                className={`btn-toggle-mode ${isRaceMode ? 'active' : ''}`}
            >
                {isRaceMode ? `🔙 ${t('single_mode', {defaultValue: 'Single Mode'})}` : `🏁 ${t('race_mode', {defaultValue: 'Race Mode'})}`}
            </button>
        </div>

        {isRaceMode ? (
          <RaceMode inputArray={inputArray} speed={speed} />
        ) : (
          <>
            <div className="toolbar-card">
              <div className="input-group">
                <span className="label-text">{t('array_label', {defaultValue: 'Array'})}: </span>
                <input
                  value={inputArray}
                  onChange={(e) => setInputArray(e.target.value)}
                  className="styled-input"
                  placeholder="Example: 10, 5, 20..."
                />
              </div>
              <div className="speed-group">
                <span className="label-text">{t('speed_label', {defaultValue: 'Speed'})}: {speed}ms</span>
                <input 
                  type="range" min="50" max="1500" step="50"
                  value={speed} onChange={(e) => setSpeed(Number(e.target.value))}
                  className="speed-slider"
                />
              </div>
              <div className="button-group">
                <button onClick={handleStart} className="btn-init">{t('restart')}</button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)} 
                  className={`btn-run ${isPlaying ? 'playing' : ''}`}
                  disabled={steps.length === 0}
                >
                  {isPlaying ? t('stop') : t('start')}
                </button>
              </div>
            </div>

            <div className="visual-box">
              {array.map((value, index) => {
                let status = "default";
                if (currentData.indices?.includes(index)) {
                  status = currentData.status || "processing"; 
                } 
                else if (currentData.sortedIndices?.includes(index)) {
                  status = "completed"; 
                }
                return <Bar key={index} value={value} status={status} maxValue={maxValue} />;
              })}
            </div>

            <div className="step-description-card">
              <span className="emoji">💡</span>
              <p>{currentData.description || t('init_guide_text', {defaultValue: 'Enter the array and click Initialize to start.'})}</p>
            </div>

            <div className="info-section">
               <PseudocodeCard algoKey={algo} />
               <ComplexityCard algoKey={algo} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}