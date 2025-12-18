import { useParams, NavLink } from "react-router-dom";
import "./VisualizationPage.css";

function VisualizationPage() {
  const { algo } = useParams();

  return (
    <div className="visual-page">
      {/* Algorithm Selector */}
      <div className="algo-tabs">
        <NavLink
          to="/algorithms/bubble"
          className={({ isActive }) =>
            isActive ? "tab active" : "tab"
          }
        >
          Bubble Sort
        </NavLink>

        <NavLink
          to="/algorithms/selection"
          className={({ isActive }) =>
            isActive ? "tab active" : "tab"
          }
        >
          Selection Sort
        </NavLink>

        <NavLink
          to="/algorithms/insertion"
          className={({ isActive }) =>
            isActive ? "tab active" : "tab"
          }
        >
          Insertion Sort
        </NavLink>
      </div>

      {/* Visualization Area */}
      <div className="visual-content">
        <h2>{algo?.toUpperCase()} SORT</h2>
        <p>Đang hiển thị thuật toán: {algo}</p>

        <div className="visual-box">
          (Khu vực trực quan hóa thuật toán)
        </div>
      </div>
    </div>
  );
}

export default VisualizationPage;