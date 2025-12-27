import { Link } from "react-router-dom";
import "./HomePage.css";
import { FaEye, FaChartBar, FaUserGraduate, FaRocket } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="home">
      {/* Thanh chuyển đổi ngôn ngữ cố định góc màn hình hoặc trong card */}
      <div className="lang-switch-container">
        <button className={i18n.language === 'vi' ? 'active' : ''} onClick={() => changeLanguage('vi')}>VI</button>
        <button className={i18n.language === 'en' ? 'active' : ''} onClick={() => changeLanguage('en')}>EN</button>
      </div>

      <section className="hero">
        <div className="glow-bg"></div>
        
        <div className="hero-content">
          {/* Phần giới thiệu đa ngôn ngữ */}
          <div className="intro-top">
            <div className="intro-badge">{t('about_badge')}</div>
            <h2 className="intro-title-new">{t('title')}</h2>
            <p className="intro-desc-new">{t('description')}</p>
          </div>

          <div className="ui-divider">
            <span className="line"></span>
            <div className="dot"></div>
            <span className="line"></span>
          </div>

          <div className="main-headline">
            <h1 className="hero-title">{t('hero_title')}</h1>
            <p className="hero-p">{t('hero_subtitle')}</p>
            <Link to="/algorithms" className="cta-btn">
               <FaRocket style={{ marginRight: '10px' }} /> {t('get_started')}
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="icon-box"><FaEye size={28} /></div>
          <h3>{t('feat_1_title')}</h3>
          <p>{t('feat_1_desc')}</p>
        </div>
        <div className="feature-card">
          <div className="icon-box"><FaChartBar size={28} /></div>
          <h3>{t('feat_2_title')}</h3>
          <p>{t('feat_2_desc')}</p>
        </div>
        <div className="feature-card">
          <div className="icon-box"><FaUserGraduate size={28} /></div>
          <h3>{t('feat_3_title')}</h3>
          <p>{t('feat_3_desc')}</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;