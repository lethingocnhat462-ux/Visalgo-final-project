import React from 'react';
import './AboutPage.css';
import { FaFlag, FaLightbulb, FaUserTie } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Import ảnh
import imgnhat from '../assets/nhat.jpg';
import imgquynh from '../assets/quynh.jpg';
import imgphuong from '../assets/phuong.jpg';
import imgdieu from '../assets/dieu.jpg';
import imgthuan from '../assets/thuan.jpg';

const AboutPage = () => {
  const { t } = useTranslation();

  // Đưa vào trong để mỗi lần ngôn ngữ thay đổi, t() sẽ được gọi lại với key tương ứng
  const teamMembers = [
    { n: "Ngọc Nhất", r: t('role_leader'), img: imgnhat },
    { n: "Như Quỳnh", r: t('role_ui'), img: imgquynh },
    { n: "Hồng Phương", r: t('role_content'), img: imgphuong },
    { n: "Mỹ Diệu", r: t('role_styles'), img: imgdieu },
    { n: "Thanh Thuận", r: t('role_algo_logic'), img: imgthuan }
  ];

  return (
    <div className="about-wrapper">
      <div className="glow-circle blue-glow"></div>
      <div className="glow-circle purple-glow"></div>

      <section className="about-hero">
        <span className="about-label">{t('about_label')}</span>
        <h1>{t('about_hero_title')}</h1>
        <p>{t('about_hero_subtitle')}</p>
      </section>

      <div className="about-grid-main">
        <div className="about-card-large">
          <div className="card-icon blue"><FaFlag /></div>
          <h2>{t('vision_title')}</h2>
          <p>{t('vision_desc')}</p>
        </div>

        <div className="about-card-large">
          <div className="card-icon yellow"><FaLightbulb /></div>
          <h2>{t('convention_title')}</h2>
          <div className="status-list">
            <div className="status-item">
              <span className="dot blue"></span> <span> {t('status_default')}</span>
            </div>
            <div className="status-item">
              <span className="dot red"></span> <span> {t('status_progress')} </span>
            </div>
            <div className="status-item">
              <span className="dot green"></span> <span> {t('status_finished')}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="team-section">
        <h2 className="team-title"><FaUserTie /> {t('our_team_title')} </h2>
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

          {/* 2 CARD HÀNG DƯỚI */}
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