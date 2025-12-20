import { useState, useRef } from "react";
import Bar from "../components/Bar";
import { bubbleSortSteps } from "../algorithms/bubbleSort";
import { insertionSortSteps } from "../algorithms/insertionSort";
import { mergeSortSteps } from "../algorithms/mergeSort";

export default function VisualizationPage() {
  const [array, setArray] = useState([5, 3, 8, 4, 2]);
  const [inputArray, setInputArray] = useState("5,3,8,4,2");
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [algorithm, setAlgorithm] = useState("bubble");
  const [speed, setSpeed] = useState(500);

  const intervalRef = useRef(null);

  /* ===== BẮT ĐẦU THUẬT TOÁN ===== */
  const start = () => {
    const arr = inputArray.split(",").map(Number);
    setArray(arr);

    let result = [];
    if (algorithm === "bubble") result = bubbleSortSteps(arr);
    if (algorithm === "insertion") result = insertionSortSteps(arr);
    if (algorithm === "merge") result = mergeSortSteps(arr);

    setSteps(result);
    setCurrentStep(0);
    pause();
  };

  /* ===== BƯỚC TIẾP THEO ===== */
  const nextStep = () => {
    if (currentStep < steps.length) {
      setArray(steps[currentStep].array);
      setCurrentStep(currentStep + 1);
    }
  };

  /* ===== PLAY ===== */
  const play = () => {
    if (isPlaying || steps.length === 0) return;
    setIsPlaying(true);

    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          pause();
          return prev;
        }
        setArray(steps[prev].array);
        return prev + 1;
      });
    }, speed);
  };

  /* ===== PAUSE ===== */
  const pause = () => {
    clearInterval(intervalRef.current);
    setIsPlaying(false);
  };

  /* ===== STEP HIỆN TẠI ===== */
  const step = steps[currentStep];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Vis Algo – Sorting Visualizer</h1>

      {/* ===== INPUT + CHỌN THUẬT TOÁN ===== */}
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          value={inputArray}
          onChange={(e) => setInputArray(e.target.value)}
          style={{ padding: 6, width: 220 }}
        />

        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          style={{ marginLeft: 10, padding: 6 }}
        >
          <option value="bubble">Bubble Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="merge">Merge Sort</option>
        </select>

        <button onClick={start} style={{ marginLeft: 10 }}>
          Start
        </button>
      </div>

      {/* ===== KHU VỰC BAR ===== */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: 300,
          gap: 12,
          marginBottom: 20,
        }}
      >
        {array.map((value, index) => {
          let status = "default";

          if (step?.compare?.includes(index)) status = "comparing";
          if (step?.swap?.includes(index)) status = "swapping";
          if (step?.sorted?.includes(index)) status = "sorted";

          return (
            <Bar
              key={index}
              value={value * 25}
              status={status}
            />
          );
        })}
      </div>

      {/* ===== CONTROL ===== */}
      <div>
        <button onClick={nextStep}>Next Step</button>
        <button onClick={play} style={{ marginLeft: 10 }}>
          ▶ Play
        </button>
        <button onClick={pause} style={{ marginLeft: 10 }}>
          ⏸ Pause
        </button>
      </div>

      {/* ===== SPEED ===== */}
      <div style={{ marginTop: 20 }}>
        <label>Tốc độ: {speed} ms</label>
        <br />
        <input
          type="range"
          min="100"
          max="1000"
          step="100"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>

      {/* ===== MÔ TẢ ===== */}
      <p style={{ marginTop: 20, minHeight: 24 }}>
        {step?.description || "Nhập mảng và nhấn Start để bắt đầu."}
      </p>
    </div>
  );
}
