import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Bar from "../components/Bar";
import {  bubbleSortSteps } from '../algorithms/bubbleSort';
import {  insertionSortSteps } from '../algorithms/insertionSort';
import { mergeSortSteps } from '../algorithms/mergeSort';

export default function VisualizationPage() {
  const { algo } = useParams(); // Lấy tên thuật toán từ URL (:algo)
  
  const [inputArray, setInputArray] = useState("45, 20, 80, 50, 10, 30, 90, 60");
  const [array, setArray] = useState([45, 20, 80, 50, 10, 30, 90, 60]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(400);

  const intervalRef = useRef(null);

  // Tự động khởi tạo lại khi người dùng đổi thuật toán qua menu điều hướng
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
    // Quyết định logic dựa trên tham số URL
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
    <div style={styles.container}>
      <h1 style={styles.title}>Thuật toán: {algo?.toUpperCase()}</h1>

      {/* Toolbar với style hàng ngang bạn đã cung cấp */}
      <div style={styles.toolbar}>
        <div style={styles.inputGroup}>
          <label style={{fontWeight: 'bold'}}>Mảng:</label>
          <input
            value={inputArray}
            onChange={(e) => setInputArray(e.target.value)}
            style={styles.input}
          />
        </div>
        <button onClick={handleStart} style={styles.primaryBtn}>Khởi tạo</button>
        <button 
          onClick={() => setIsPlaying(!isPlaying)} 
          style={{...styles.playBtn, backgroundColor: isPlaying ? "#e74c3c" : "#2ecc71"}}
        >
          {isPlaying ? "Tạm dừng" : "Bắt đầu chạy"}
        </button>
      </div>

      

      <div style={styles.visualizerArea}>
  {array.map((value, index) => {
    let status = "default";
    
    // 1. Kiểm tra xem index hiện tại có nằm trong danh sách indices đang xử lý không
    const isActive = currentData.indices?.includes(index);

    // 2. Nếu có, lấy đúng status ('comparing', 'swapping', 'sorted') từ dữ liệu thuật toán
    if (isActive) {
      status = currentData.status; 
    }

    return (
      <Bar
        key={index}
        value={value}
        status={status} // Truyền 'comparing', 'swapping' hoặc 'sorted' vào Bar.js
      />
    );
  })}
</div>

      <div style={styles.descriptionBox}>
        <strong>Bước {currentStep + 1}:</strong> {currentData.description || "Nhấn 'Bắt đầu' để xem mô phỏng."}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: "40px", textAlign: "center", fontFamily: "Arial, sans-serif" },
  title: { color: "#15191dff", marginBottom: "30px" },
  toolbar: { 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    gap: "25px", 
    marginBottom: "40px", 
    flexWrap: "nowrap" 
  },
  inputGroup: { 
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    gap: "10px" 
  },
  input: { padding: "10px", width: "250px", borderRadius: "5px", border: "1px solid #ddd" },
  primaryBtn: { padding: "10px 20px", background: "#3498db", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
  playBtn: { padding: "10px 25px", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" },
  visualizerArea: { 
    display: "flex", justifyContent: "center", alignItems: "flex-end", 
    height: "350px", gap: "8px", background: "#f9f9f9", padding: "20px", borderRadius: "10px", border: "1px solid #eee" 
  },
  descriptionBox: { marginTop: "30px", padding: "15px", backgroundColor: "#ecf0f1", borderRadius: "8px", display: "inline-block" }
};