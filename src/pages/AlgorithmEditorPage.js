/* eslint-disable no-new-func */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from "@monaco-editor/react";
import './AlgorithmEditorPage.css';

const AlgorithmEditorPage = () => {
    const { t } = useTranslation();
    const [array, setArray] = useState([70, 20, 90, 50, 30, 80, 10, 40]);
    const [userInput, setUserInput] = useState("70, 20, 90, 50, 30, 80, 10, 40"); // Lưu chuỗi người dùng nhập
    const [isRunning, setIsRunning] = useState(false);
    const [comparingIndices, setComparingIndices] = useState([]);
    const [sortedIndices, setSortedIndices] = useState([]);

    const [code, setCode] = useState(() => {
        return localStorage.getItem('sandbox-code') || 
`async function sort(arr, setArray, setComparing, setSorted, delay) {
  let a = [...arr];
  let n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      setComparing([j, j + 1]);
      await delay(200);
      if (a[j] > a[j + 1]) {
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

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Hàm xử lý khi người dùng nhấn "Khởi tạo mảng"
    const handleCustomArray = () => {
        if (isRunning) return;
        // Chuyển chuỗi "10, 20, 30" thành mảng [10, 20, 30]
        const newArr = userInput.split(',')
            .map(num => parseInt(num.trim()))
            .filter(num => !isNaN(num)); // Loại bỏ các giá trị không phải là số

        if (newArr.length > 0) {
            setArray(newArr);
            setSortedIndices([]);
            setComparingIndices([]);
        } else {
            alert("Vui lòng nhập định dạng đúng: 10, 20, 30...");
        }
    };

    const handleRun = async () => {
        if (isRunning) return;
        setIsRunning(true);
        setSortedIndices([]);
        try {
            const execute = new Function(
                'arr', 'setArray', 'setComparing', 'setSorted', 'delay',
                `${code}\n return sort(arr, setArray, setComparing, setSorted, delay);`
            );
            await execute(array, setArray, setComparingIndices, setSortedIndices, delay);
        } catch (err) {
            alert(`${t('error_syntax')}: ${err.message}`);
        } finally {
            setIsRunning(false);
            setComparingIndices([]);
        }
    };

    return (
        <div className="editor-page-wrapper">
            <div className="editor-header">
                <h1>{t('sandbox_title')}</h1>
                <p>{t('sandbox_subtitle')}</p>
                
                {/* Ô NHẬP MẢNG TÙY CHỈNH */}
                <div className="custom-input-container">
                    <input 
                        type="text" 
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Ví dụ: 10, 50, 20, 40..."
                        disabled={isRunning}
                    />
                    <button onClick={handleCustomArray} disabled={isRunning}>
                        {t('restart')}
                    </button>
                </div>
            </div>

            <div className="editor-main-content">
                <div className="code-section">
                    <div className="label-bar">{t('editor_label')}</div>
                    <div className="editor-border">
                        <Editor
                            height="400px"
                            defaultLanguage="javascript"
                            theme="vs-dark"
                            value={code}
                            onChange={(val) => setCode(val || "")}
                            options={{ fontSize: 14, minimap: { enabled: false } }}
                        />
                    </div>
                    <div className="button-group">
                        <button className="btn-run" onClick={handleRun} disabled={isRunning}>
                            {isRunning ? "Running..." : t('btn_run')}
                        </button>
                    </div>
                </div>

                <div className="visual-section">
                    <div className="label-bar">{t('visual_label')}</div>
                    <div className="bars-container">
                        {array.map((val, i) => (
                            <div key={i} className="bar-item-wrapper">
                                <div 
                                    className={`bar ${comparingIndices.includes(i) ? 'comparing' : sortedIndices.includes(i) ? 'sorted' : ''}`} 
                                    style={{ height: `${(val / Math.max(...array)) * 100}%` }}
                                >
                                    <span className="bar-value">{val}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlgorithmEditorPage;