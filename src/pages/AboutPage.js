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
    { n: "Ngọc Nhất", r: "Leader & Logic", img: imgnhat },
    { n: "Như Quỳnh", r: "Development UI", img: imgquynh },
    { n: "Hồng Phương", r: "Documentaries & Content", img: imgphuong },
    { n: "Mỹ Diệu", r: "Styles & Header", img: imgdieu },
    { n: "Thanh Thuận", r: "Logic Algorithms", img: imgthuan }
  ];

  return (
    <div className="about-wrapper">
      <div className="glow-circle blue-glow"></div>
      <div className="glow-circle purple-glow"></div>

      <section className="about-hero">
        <span className="about-label">Knowledge Base</span>
        <h1>Explore Vis-Algo</h1>
        <p>A streamlined and efficient approach to visualizing algorithms.</p>
      </section>

      <div className="about-grid-main">
        <div className="about-card-large">
          <div className="card-icon blue"><FaFlag /></div>
          <h2>Strategic Vision </h2>
          <p>
            Removing the barriers between dry theory and visual practice allows students to gain a clearer understanding of how algorithms function
          </p>
        </div>

        <div className="about-card-large">
          <div className="card-icon yellow"><FaLightbulb /></div>
          <h2>Convention</h2>
          <div className="status-list">
            <div className="status-item">
              <span className="dot blue"></span> <span> Default: Waiting</span>
            </div>
            <div className="status-item">
              <span className="dot red"></span> <span> In Progress: Comparison and Swapping </span>
            </div>
            <div className="status-item">
              <span className="dot green"></span> <span> Finished: Done</span>
            </div>
          </div>
        </div>
      </div>

      <section className="team-section">
        <h2 className="team-title"><FaUserTie /> Our Team </h2>
        {/* Container quan trọng để chia hàng 3 trên - 2 dưới */}
        <div className="team-grid-layout">
  {/* 3 CARD HÀNG TRÊN */}
  {teamMembers.slice(0, 3).map((m, i) => (
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

  {/* 2 CARD HÀNG DƯỚI – CĂN GIỮA */}
  <div className="team-row-center">
    {teamMembers.slice(3).map((m, i) => (
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
</div>

      </section>
</div>
  );
};

export default AboutPage;