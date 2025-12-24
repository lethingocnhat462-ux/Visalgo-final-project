import React from 'react';

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Về dự án Vis-Algo 🚀</h1>
        <p style={styles.subtitle}>
          Công cụ trực quan hóa thuật toán giúp việc học lập trình trở nên sinh động và dễ dàng hơn.
        </p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>✨ Mục tiêu dự án</h2>
        <p style={styles.text}>
          Dự án được phát triển bởi Nhóm 4 nhằm giải quyết khó khăn trong việc hiểu các thuật toán sắp xếp trừu tượng. 
          Bằng cách sử dụng màu sắc và chuyển động, người học có thể quan sát từng bước xử lý dữ liệu thực tế.
        </p>
      </section>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>🔵 Trạng thái mặc định</h3>
          <p>Các phần tử đang chờ được xử lý trong mảng.</p>
        </div>
        <div style={styles.card}>
          <h3>🔴 Đang xử lý</h3>
          <p>Các phần tử đang được so sánh hoặc hoán đổi vị trí (Red/Yellow).</p>
        </div>
        <div style={styles.card}>
          <h3>🟢 Đã hoàn thành</h3>
          <p>Các phần tử đã nằm đúng vị trí cuối cùng trong mảng đã sắp xếp.</p>
        </div>
      </div>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>👥 Đội ngũ phát triển</h2>
        <ul style={styles.list}>
          <li><strong>Ngọc Nhất:</strong> Trưởng nhóm, Kiểm thử & Logic thuật toán.</li>
          <li><strong>Như Quỳnh:</strong> Phát triển UI Component & Logic điều khiển.</li>
          <li><strong>Hồng Phương:</strong> Điều hướng, Tài liệu & Quản lý nội dung.</li>
          <li><strong>Mỹ Diệu:</strong> Thiết kế Global Styles,Xây dựng Thanh Header.</li>
          <li><strong>Thanh Thuận:</strong>Code Logic 3 Thuật toán.</li>
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: { maxWidth: '900px', margin: '0 auto', padding: '40px 20px', fontFamily: 'Arial, sans-serif', color: '#2c3e50', lineHeight: '1.6' },
  header: { textAlign: 'center', marginBottom: '50px' },
  mainTitle: { fontSize: '2.5rem', color: '#3498db', marginBottom: '10px' },
  subtitle: { fontSize: '1.2rem', color: '#7f8c8d' },
  section: { marginBottom: '40px' },
  sectionTitle: { borderBottom: '2px solid #3498db', display: 'inline-block', paddingBottom: '5px', marginBottom: '15px' },
  text: { fontSize: '1.1rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '50px' },
  card: { padding: '20px', borderRadius: '10px', backgroundColor: '#f9f9f9', border: '1px solid #eee', textAlign: 'center' },
  list: { listStyleType: 'none', padding: 0, fontSize: '1.1rem' }
};

export default AboutPage;