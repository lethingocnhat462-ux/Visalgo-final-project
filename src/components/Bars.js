import React from "react";
import "./Bars.css";

export default function Bars({ array, compare = [], swap = [] }) {
  return (
    <div className="bars-container">
      {array.map((value, idx) => {
        const isComparing = compare.includes(idx);
        const isSwapping = swap.includes(idx);
        const barColor = isSwapping ? "green" : isComparing ? "red" : "blue";

        return (
          <div
            key={idx}
            className="bar"
            style={{
              height: `${value * 30}px`,
              backgroundColor: barColor,
              transition: "all 0.3s ease"
            }}
          />
        );
      })}
    </div>
  );
}