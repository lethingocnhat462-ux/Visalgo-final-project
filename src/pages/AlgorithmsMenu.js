import React from 'react';
import { Link } from 'react-router-dom';
import './AlgorithmsMenu.css';

const AlgorithmsMenu = () => {
  const algorithms = [
    { id: 'bubbleSort', name: 'Bubble Sort', description: 'Sắp xếp nổi bọt' },
    { id: 'insertionSort', name: 'Insertion Sort', description: 'Sắp xếp chèn' },
    { id: 'mergeSort', name: 'Merge Sort', description: 'Sắp xếp trộn' }
  ];

  return (
    <div className="algorithms-menu">
      <h2>Danh sách thuật toán</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {algorithms.map((algo) => (
          <Link 
            key={algo.id} 
            to={`/algorithms/${algo.id}`} 
            className="algo-card"
          >
            <h3>{algo.name}</h3>
            <p>{algo.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AlgorithmsMenu;
