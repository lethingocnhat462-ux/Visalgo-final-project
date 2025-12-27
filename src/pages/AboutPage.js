import React from 'react';
import './AboutPage.css';
import { FaFlag, FaLightbulb, FaUserTie } from 'react-icons/fa';

// Import ảnh từ thư mục assets
import imgnhat from '../assets/nhat.jpg';
import imgquynh from '../assets/quynh.jpg';
import imgphuong from '../assets/phuong.jpg';
import imgdieu from '../assets/dieu.jpg';
import imgthuan from '../assets/thuan.jpg';

const AboutPage = () => {
  const teamMembers = [
    { n: "Ngọc Nhất", r: "Trưởng nhóm & Logic", img: imgnhat },
    { n: "Như Quỳnh", r: "Phát triển UI", img: imgquynh },
    { n: "Hồng Phương", r: "Tài liệu & Content", img: imgphuong },
    { n: "Mỹ Diệu", r: "Styles & Header", img: imgdieu },
    { n: "Thanh Thuận", r: "Logic Thuật toán", img: imgthuan }
  ];

  return (
    <div className="about-wrapper">
      <div className="glow-circle blue-glow"></div>
      <div className="glow-circle purple-glow"></div>

      <section className="about-hero">
        <span className="about-label">Knowledge Base</span>
        <h1>Khám phá Vis-Algo</h1>
        <p>Hành trình trực quan hóa thuật toán đơn giản và hiệu quả.</p>
      </section>

      <div className="about-grid-main">
        <div className="about-card-large">
          <div className="card-icon blue"><FaFlag /></div>
          <h2>Tầm nhìn</h2>
          <p>
            Xóa bỏ rào cản giữa lý thuyết khô khan và thực hành trực quan giúp 
            học sinh và sinh viên có thể nhìn rõ hơn về cách hoạt động của các thuật toán.
          </p>
        </div>

        <div className="about-card-large">
          <div className="card-icon yellow"><FaLightbulb /></div>
          <h2>Quy ước</h2>
          <div className="status-list">
            <div className="status-item">
              <span className="dot blue"></span> <span>Mặc định: Chờ</span>
            </div>
            <div className="status-item">
              <span className="dot red"></span> <span>Đang xử lý: So sánh</span>
            </div>
            <div className="status-item">
              <span className="dot green"></span> <span>Hoàn thành: Đã xong</span>
            </div>
          </div>
        </div>
      </div>

      <section className="team-section">
        <h2 className="team-title"><FaUserTie /> Đội ngũ thực hiện</h2>
        {/* Container quan trọng để chia hàng 3 trên - 2 dưới */}
        <div className="team-grid-layout">
          {teamMembers.map((m, i) => (
            <div key={i} className="member-mini-card">
              <div className="member-logo-wrapper">
                <img src={m.img} alt={m.n} className="member-logo-img" />
              </div>
              <div className="member-mini-info">
                <span className="mini-name">{m.n}</span>
                <span className="mini-role">{m.r}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;