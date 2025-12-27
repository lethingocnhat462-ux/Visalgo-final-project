import React from 'react';
import './AboutPage.css';
import { FaFlag, FaLightbulb, FaUserTie } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <section className="about-hero">
        <span className="about-label">Knowledge Base</span>
        <h1>Khám phá Vis-Algo</h1>
        <p>Hành trình trực quan hóa giúp mọi thuật toán trở nên đơn giản hơn bao giờ hết.</p>
      </section>

      <div className="about-grid-main">
        {/* Khối Mục tiêu */}
        <div className="about-card-large">
          <div className="card-icon blue"><FaFlag /></div>
          <h2>Tầm nhìn dự án</h2>
          <p>Được xây dựng bởi Nhóm 4, dự án tập trung vào việc xóa bỏ rào cản giữa lý thuyết khô khan và thực hành trực quan. Chúng tôi tin rằng hình ảnh hóa là chìa khóa để nắm vững tư duy lập trình.</p>
        </div>

        {/* Khối Ý nghĩa màu sắc */}
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

      {/* Đội ngũ phát triển */}
      <section className="team-section">
        <h2><FaUserTie /> Đội ngũ thực hiện</h2>
        <div className="team-container">
          {[
            {n: "Ngọc Nhất", r: "Trưởng nhóm & Logic"},
            {n: "Như Quỳnh", r: "Phát triển UI"},
            {n: "Hồng Phương", r: "Tài liệu & Content"},
            {n: "Mỹ Diệu", r: "Global Styles & Header"},
            {n: "Thanh Thuận", r: "Logic Thuật toán"}
          ].map((m, i) => (
            <div key={i} className="member-tag">
              <span className="member-name">{m.n}</span>
              <span className="member-role">{m.r}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;