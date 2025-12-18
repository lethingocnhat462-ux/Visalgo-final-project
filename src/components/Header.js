import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaChartBar } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      {/* Logo / Tên App */}
      <div className="logo">
        <Link to="/">Vis Algo</Link>
      </div>

      {/* Menu điều hướng */}
      <nav className="nav">
        <Link to="/">
          <FaHome /> Trang chủ
        </Link>

        <Link to="/algorithms">
          <FaChartBar /> Thuật toán
        </Link>

        <Link to="/about">
          <FaInfoCircle /> Giới thiệu
        </Link>
      </nav>
    </header>
  );
}

export default Header;