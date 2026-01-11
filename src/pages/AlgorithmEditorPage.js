/* eslint-disable no-new-func */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from "@monaco-editor/react";
import './AlgorithmEditorPage.css';

const AlgorithmEditorPage = () => {
    const { t } = useTranslation();
    const [array, setArray] = useState([70, 20, 90, 50, 30, 80, 10, 40]);
    const [isRunning, setIsRunning] = useState(false);
    // Lưu vị trí 2 cột đang so sánh (ví dụ: [0, 1])
    const [comparingIndices, setComparingIndices] = useState([]);

    const [code, setCode] = useState(`// Thuật toán có hiệu ứng màu khi so sánh
async function sort(arr, setArray, setComparing, delay) {
  let tempArray = [...arr];
  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length - i - 1; j++) {
      // Bật màu so sánh cho cột j và j+1
      setComparing([j, j + 1]);
      await delay(300); 

      if (tempArray[j] > tempArray[j + 1]) {
        // Hoán đổi giá trị
        [tempArray[j], tempArray[j+1]] = [tempArray[j+1], tempArray[j]];
        setArray([...tempArray]);
      }
    }
  }
  // Hoàn tất, xóa màu highlight
  setComparing([]);
}`);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const handleRun = async () => {
        if (isRunning) return;
        setIsRunning(true);
        try {
            // Truyền mảng, setArray, setComparing và delay vào hàm thực thi
            const userFunc = new Function('arr', 'setArray', 'setComparing', 'delay', 
                `return (${code})(arr, setArray, setComparing, delay);`
            );
            await userFunc(array, setArray, setComparingIndices, delay);
        } catch (err) {
            alert(`${t('error_syntax')}: ${err.message}`);
        }
        setIsRunning(false);
    };

    const resetArray = () => {
        if (isRunning) return;
        setArray(Array.from({ length: 8 }, () => Math.floor(Math.random() * 85) + 10));
        setComparingIndices([]);
    };

    return (
        <div className="editor-page-wrapper">
            <div className="editor-header">
                <h1>{t('sandbox_title')}</h1>
                <p>{t('sandbox_subtitle')}</p>
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
                            onChange={(value) => setCode(value)}
                            options={{
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: 14,
                                minimap: { enabled: false },
                                automaticLayout: true,
                            }}
                        />
                    </div>
                    <div className="button-group">
                        <button className="btn-run" onClick={handleRun} disabled={isRunning}>
                            {isRunning ? "Running..." : t('btn_run')}
                        </button>
                        <button className="btn-reset" onClick={resetArray} disabled={isRunning}>
                            {t('btn_reset')}
                        </button>
                    </div>
                </div>

                <div className="visual-section">
                    <div className="label-bar">{t('visual_label')}</div>
                    <div className="bars-container">
                        {array.map((val, i) => (
                            <div key={i} className="bar-item-wrapper">
                                {/* Thêm class 'comparing' nếu index i đang được so sánh */}
                                <div 
                                    className={`bar ${comparingIndices.includes(i) ? 'comparing' : ''}`} 
                                    style={{ height: `${val}%` }}
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