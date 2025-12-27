import React from 'react';
import './AboutPage.css';
import { FaFlag, FaLightbulb, FaUserTie } from 'react-icons/fa';

const AboutPage = () => {
  const teamMembers = [
    { n: "Ngọc Nhất", r: "Trưởng nhóm & Logic", img: "/images/nhat.png" },
    { n: "Như Quỳnh", r: "Phát triển UI", img: "/images/quynh.png" },
    { n: "Hồng Phương", r: "Tài liệu & Content", img: "/images/phuong.png" },
    { n: "Mỹ Diệu", r: "Global Styles & Header", img: "/images/dieu.png" },
    { n: "Thanh Thuận", r: "Logic Thuật toán", img: "/images/thuan.png" }
  ];
  return (
    <div className="about-wrapper">
      <div className="glow-circle blue-glow"></div>
      <div className="glow-circle purple-glow"></div>

      <section className="about-hero">
        <span className="about-label">Knowledge Base</span>
        <h1>Khám phá Vis-Algo</h1>
        <p>Hành trình trực quan hóa giúp mọi thuật toán trở nên đơn giản hơn bao giờ hết.</p>
      </section>

      <div className="about-grid-main">
        <div className="about-card-large">
          <div className="card-icon blue"><FaFlag /></div>
          <h2>Tầm nhìn dự án</h2>
          <p>Được xây dựng bởi Nhóm 4, dự án tập trung vào việc xóa bỏ rào cản giữa lý thuyết khô khan và thực hành trực quan. Chúng tôi tin rằng hình ảnh hóa là chìa khóa để nắm vững tư duy lập trình.</p>
        </div>

        <div className="about-card-large">
          <div className="card-icon yellow"><FaLightbulb /></div>
          <h2>Quy ước trạng thái</h2>
          <div className="status-list">
            <div className="status-item">
              <span className="dot blue"></span>
              <div><strong>Mặc định:</strong> Các phần tử đang chờ xử lý.</div>
            </div>
            <div className="status-item">
              <span className="dot red"></span>
              <div><strong>Xử lý:</strong> Đang so sánh/hoán đổi.</div>
            </div>
            <div className="status-item">
              <span className="dot green"></span>
              <div><strong>Hoàn thành:</strong> Đã về đúng vị trí.</div>
            </div>
          </div>
        </div>
      </div>

      <section className="team-section">
        <h2><FaUserTie /> Đội ngũ thực hiện</h2>
        <div className="team-container">
          {teamMembers.map((m, i) => (
            <div key={i} className="member-tag">
              <div className="member-avatar">
                <img src={m.img} alt={m.n} />
              </div>
              <div className="member-info">
                <span className="member-name">{m.n}</span>
                <span className="member-role">{m.r}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;