import { Link } from "react-router-dom";
import "./HomePage.css";
import { FaEye, FaChartBar, FaUserGraduate, FaRocket } from "react-icons/fa";

function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        {/* Điểm sáng trang trí nền */}
        <div className="glow-bg"></div>
        
        <div className="hero-content">
          {/* PHẦN GIỚI THIỆU TRÊN CÙNG */}
          <div className="intro-top">
            <div className="intro-badge">Về dự án</div>
            <h2 className="intro-title-new">Vis Algo là gì?</h2>
            <p className="intro-desc-new">
              Nền tảng học tập tương tác, biến các thuật toán phức tạp thành trải nghiệm hình ảnh sinh động.
            </p>
          </div>

          {/* ĐƯỜNG KẺ TRANG TRÍ MỚI - GIÚP NGẮT BỐ CỤC */}
          <div className="ui-divider">
            <span className="line"></span>
            <div className="dot"></div>
            <span className="line"></span>
          </div>

          {/* TIÊU ĐỀ CHÍNH */}
          <div className="main-headline">
            <h1 className="hero-title">Trực Quan Hóa <br/> Thuật Toán Sắp Xếp</h1>
            <p className="hero-p">Giúp bạn nắm vững logic sắp xếp thông qua mô phỏng từng bước rõ ràng.</p>
            <Link to="/algorithms" className="cta-btn">
               <FaRocket style={{ marginRight: '10px' }} /> Bắt đầu ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Phần tính năng ở dưới */}
      <section className="features">
        <div className="feature-card">
          <div className="icon-box"><FaEye size={28} /></div>
          <h3>Dễ hiểu</h3>
          <p>Minh họa logic từng bước một cách chi tiết.</p>
        </div>
        <div className="feature-card">
          <div className="icon-box"><FaChartBar size={28} /></div>
          <h3>Trực quan</h3>
          <p>Màu sắc phân biệt rõ ràng các trạng thái dữ liệu.</p>
        </div>
        <div className="feature-card">
          <div className="icon-box"><FaUserGraduate size={28} /></div>
          <h3>Thân thiện</h3>
          <p>Giao diện tối ưu cho trải nghiệm học tập hiện đại.</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;