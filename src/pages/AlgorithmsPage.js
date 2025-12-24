import React from 'react';
import { Link } from 'react-router-dom';

const AlgorithmsPage = () => {
  const algos = [
    { id: 'bubble', name: 'Bubble Sort', desc: 'Sắp xếp nổi bọt' },
    { id: 'insertion', name: 'Insertion Sort', desc: 'Sắp xếp chèn' },
    { id: 'merge', name: 'Merge Sort', desc: 'Sắp xếp trộn' }
  ];

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Danh sách thuật toán</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
        {algos.map(algo => (
          <div key={algo.id} style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '12px', width: '250px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <h3>{algo.name}</h3>
            <p style={{ color: '#666' }}>{algo.desc}</p>
            <Link 
              to={`/algorithms/${algo.id}`} 
              style={{ display: 'inline-block', marginTop: '10px', padding: '8px 16px', backgroundColor: '#1890ff', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}
            >
              Xem trực quan
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlgorithmsPage;