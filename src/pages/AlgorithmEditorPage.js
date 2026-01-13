/* eslint-disable no-new-func */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from "@monaco-editor/react";
import './AlgorithmEditorPage.css';

const AlgorithmEditorPage = () => {
    const { t } = useTranslation();
    const [array, setArray] = useState([70, 20, 90, 50, 30, 80, 10, 40]);
    const [userInput, setUserInput] = useState("70, 20, 90, 50, 30, 80, 10, 40");
    const [isRunning, setIsRunning] = useState(false);
    const [comparingIndices, setComparingIndices] = useState([]);
    const [sortedIndices, setSortedIndices] = useState([]);

    const [speed, setSpeed] = useState(500); 
    const [stats, setStats] = useState({ comparisons: 0, swaps: 0, duration: 0 });

    // Cập nhật code mẫu với chú thích Tiếng Việt
    const [code, setCode] = useState(() => {
        return localStorage.getItem('sandbox-code') || 
`async function sort(arr, setArray, setComparing, setSorted, delay, countComp, countSwap) {
  let a = [...arr];
  let n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      setComparing([j, j + 1]);
      countComp(); // Đếm so sánh
      await delay(); 
      if (a[j] > a[j + 1]) {
        countSwap(); // Đếm hoán đổi
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        setArray([...a]);
      }
    }
    setSorted(prev => [...prev, n - 1 - i]);
  }
  setComparing([]);
}`;
    });

    useEffect(() => {
        localStorage.setItem('sandbox-code', code);
    }, [code]);

    const customDelay = () => new Promise(resolve => setTimeout(resolve, speed));

    const handleCustomArray = () => {
        if (isRunning) return;
        const newArr = userInput.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
        if (newArr.length > 0) {
            setArray(newArr);
            setSortedIndices([]);
            setComparingIndices([]);
            setStats({ comparisons: 0, swaps: 0, duration: 0 });
        } else {
            alert(t('init_guide_text')); // Sử dụng thông báo từ i18n
        }
    };

    const handleRun = async () => {
        if (isRunning) return;
        setIsRunning(true);
        setSortedIndices([]);
        let compCount = 0;
        let swapCount = 0;
        setStats({ comparisons: 0, swaps: 0, duration: 0 });

        const countComp = () => { compCount++; setStats(prev => ({ ...prev, comparisons: compCount })); };
        const countSwap = () => { swapCount++; setStats(prev => ({ ...prev, swaps: swapCount })); };

        try {
            const t0 = performance.now();
            const execute = new Function(
                'arr', 'setArray', 'setComparing', 'setSorted', 'delay', 'countComp', 'countSwap',
                `${code}\n return sort(arr, setArray, setComparing, setSorted, delay, countComp, countSwap);`
            );
            await execute(array, setArray, setComparingIndices, setSortedIndices, customDelay, countComp, countSwap);
            const t1 = performance.now();
            setStats(prev => ({ ...prev, duration: Math.round(t1 - t0) }));
        } catch (err) {
            alert(`${t('error_syntax')}: ${err.message}`);
        } finally {
            setIsRunning(false);
            setComparingIndices([]);
        }
    };

    return (
        <div className="editor-page-wrapper">
            <div className="bubbles">
                {[...Array(7)].map((_, i) => <div key={i} className="bubble"></div>)}
            </div>

            <div className="editor-header">
                <h1>{t('sandbox_title')}</h1>
                <p>{t('sandbox_subtitle')}</p>
                
                <div className="custom-input-container">
                    <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} disabled={isRunning} />
                    {/* Đổi Initial Value thành Khởi tạo */}
                    <button onClick={handleCustomArray} disabled={isRunning}>{t('restart')}</button>
                </div>

                <div className="speed-control">
                    {/* Đổi Speed thành Tốc độ */}
                    <label>{t('speed_label')}: {speed}ms</label>
                    <input 
                        type="range" 
                        min="50" 
                        max="2000" 
                        step="50" 
                        value={speed} 
                        onChange={(e) => setSpeed(parseInt(e.target.value))} 
                    />
                </div>
            </div>

            <div className="editor-main-content">
                <div className="code-section">
                    <div className="label-bar">{t('editor_label')}</div>
                    <Editor height="400px" defaultLanguage="javascript" theme="vs-dark" value={code} onChange={(val) => setCode(val || "")} options={{ fontSize: 14, minimap: { enabled: false } }} />
                    <div className="button-group">
                        <button className="btn-run" onClick={handleRun} disabled={isRunning}>
                            {/* Đổi trạng thái nút khi chạy sang Tiếng Việt */}
                            {isRunning ? t('status_progress').split(':')[0] + "..." : t('btn_run')}
                        </button>
                    </div>
                </div>

                <div className="visual-section">
                    <div className="label-bar">{t('visual_label')}</div>
                    <div className="bars-container">
                        {array.map((val, i) => (
                            <div key={i} className="bar-item-wrapper">
                                <div className={`bar ${comparingIndices.includes(i) ? 'comparing' : sortedIndices.includes(i) ? 'sorted' : ''}`} 
                                     style={{ height: `${(val / Math.max(...array)) * 100}%` }}>
                                    <span className="bar-value">{val}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="analytics-dashboard">
                <div className="stat-item">
                    {/* Tự động lấy "Số phép so sánh" */}
                    <span className="stat-label">{t('stats_comparisons') || "Comparisons"}</span>
                    <span className="stat-value">{stats.comparisons}</span>
                </div>
                <div className="stat-item">
                    {/* Tự động lấy "Số phép hoán đổi" */}
                    <span className="stat-label">{t('stats_swaps') || "Swaps"}</span>
                    <span className="stat-value">{stats.swaps}</span>
                </div>
                <div className="stat-item">
                    {/* Tự động lấy "Thời gian thực thi" */}
                    <span className="stat-label">{t('stats_duration') || "Execution Time"}</span>
                    <span className="stat-value">{stats.duration}ms</span>
                </div>
            </div>
        </div>
    );
};

export default AlgorithmEditorPage;