import { Link } from "react-router-dom";
import "./HomePage.css";
import { FaEye, FaChartBar, FaUserGraduate } from "react-icons/fa";

function HomePage() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Trực Quan Hóa Thuật Toán Sắp Xếp</h1>
        <p>
          Vis Algo giúp bạn hiểu rõ cách các thuật toán hoạt động thông qua
          mô phỏng trực quan, sinh động và dễ hiểu.
        </p>

        <Link to="/algorithms/bubble" className="cta-btn">
          Bắt đầu ngay
        </Link>
      </section>

      {/* Giới thiệu */}
      <section className="intro">
        <h2>Vis Algo là gì?</h2>
        <p>
          Vis Algo là ứng dụng hỗ trợ học thuật toán bằng cách trực quan hóa
          từng bước xử lý, giúp người học dễ dàng nắm bắt kiến thức.
        </p>
      </section>

      {/* Ưu điểm */}
      <section className="features">
        <div className="feature-card">
          <FaEye size={40} />
          <h3>Dễ hiểu</h3>
          <p>Minh họa thuật toán từng bước rõ ràng.</p>
        </div>

        <div className="feature-card">
          <FaChartBar size={40} />
          <h3>Trực quan</h3>
          <p>Thanh dữ liệu động giúp quan sát quá trình sắp xếp.</p>
        </div>

        <div className="feature-card">
          <FaUserGraduate size={40} />
          <h3>Thân thiện</h3>
          <p>Giao diện hiện đại, dễ sử dụng cho sinh viên.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;