/* eslint-disable no-new-func */
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Editor from "@monaco-editor/react";
import './AlgorithmEditorPage.css';

const AlgorithmEditorPage = () => {
    const { t } = useTranslation();
    const [array, setArray] = useState([70, 20, 90, 50, 30, 80, 10, 40]);
    const [isRunning, setIsRunning] = useState(false);
    const [comparingIndices, setComparingIndices] = useState([]);
    const [sortedIndices, setSortedIndices] = useState([]);

    // 1. Tự động tải code từ LocalStorage hoặc dùng code mẫu mặc định
    const [code, setCode] = useState(() => {
        return localStorage.getItem('sandbox-code') || 
`async function sort(arr, setArray, setComparing, setSorted, delay) {
  let a = [...arr];
  let n = a.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Đổi sang màu đỏ/vàng khi so sánh
      setComparing([j, j + 1]);
      await delay(250);

      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        // Cập nhật mảng thực tế để giao diện vẽ lại
        setArray([...a]);
      }
    }
    // Đánh dấu phần tử đã nằm đúng vị trí (màu xanh lá)
    setSorted(prev => [...prev, n - 1 - i]);
  }
  setComparing([]); // Reset màu so sánh khi hoàn tất
}`;
    });

    // 2. Đồng bộ code vào LocalStorage để không bị mất khi F5 trang
    useEffect(() => {
        localStorage.setItem('sandbox-code', code);
    }, [code]);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const handleRun = async () => {
        if (isRunning) return;
        
        setIsRunning(true);
        setSortedIndices([]); // Xóa các vết xanh cũ
        setComparingIndices([]); // Xóa các vết đỏ cũ

        try {
            /**
             * Giải thích cơ chế:
             * new Function tạo ra một "hộp cát" chứa các tham số:
             * arr: Dữ liệu mảng gốc
             * setArray/setComparing/setSorted: Các hàm điều khiển UI từ bên trong code người dùng
             */
            const execute = new Function(
                'arr', 'setArray', 'setComparing', 'setSorted', 'delay',
                `${code}\n return sort(arr, setArray, setComparing, setSorted, delay);`
            );
            
            // Bắt đầu thực thi hàm async sort mà người dùng đã viết
            await execute(array, setArray, setComparingIndices, setSortedIndices, delay);
            
        } catch (err) {
            // Thông báo nếu người dùng viết sai cú pháp JavaScript
            alert(`${t('error_syntax')}: ${err.message}`);
        } finally {
            setIsRunning(false);
            setComparingIndices([]);
        }
    };

    const resetArray = () => {
        if (isRunning) return;
        // Tạo mảng ngẫu nhiên mới với các giá trị từ 10 đến 95
        const newArray = Array.from({ length: 8 }, () => Math.floor(Math.random() * 85) + 10);
        setArray(newArray);
        setComparingIndices([]);
        setSortedIndices([]);
    };

    return (
        <div className="editor-page-wrapper">
            <div className="editor-header">
                <h1>{t('sandbox_title')}</h1>
                <p>{t('sandbox_subtitle')}</p>
            </div>

            <div className="editor-main-content">
                {/* KHUNG BÊN TRÁI: TRÌNH SOẠN THẢO */}
                <div className="code-section">
                    <div className="label-bar">{t('editor_label')}</div>
                    <div className="editor-border">
                        <Editor
                            height="450px"
                            defaultLanguage="javascript"
                            theme="vs-dark"
                            value={code}
                            onChange={(val) => setCode(val || "")}
                            options={{
                                fontSize: 14,
                                fontFamily: "'JetBrains Mono', monospace",
                                minimap: { enabled: false },
                                automaticLayout: true,
                                scrollBeyondLastLine: false,
                                lineNumbers: "on",
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

                {/* KHUNG BÊN PHẢI: TRỰC QUAN HÓA */}
                <div className="visual-section">
                    <div className="label-bar">{t('visual_label')}</div>
                    <div className="bars-container">
                        {array.map((val, i) => {
                            let status = "";
                            // Ưu tiên hiển thị màu đang so sánh, sau đó mới đến màu đã hoàn thành
                            if (comparingIndices.includes(i)) status = "comparing";
                            else if (sortedIndices.includes(i)) status = "sorted";
                            
                            return (
                                <div key={i} className="bar-item-wrapper">
                                    <div className={`bar ${status}`} style={{ height: `${val}%` }}>
                                        <span className="bar-value">{val}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlgorithmEditorPage;