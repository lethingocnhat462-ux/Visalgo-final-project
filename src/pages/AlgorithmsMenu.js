import React from 'react';
import { Link } from 'react-router-dom';
import './AlgorithmsMenu.css';
import { useTranslation } from 'react-i18next';

const AlgorithmsMenu = () => {
  const algorithms = [
    { id: 'bubbleSort', name: 'Bubble Sort', description: 'Repeatedly swaps adjacent elements if they are in the wrong order until the array is sorted.' },
    { id: 'insertionSort', name: 'Insertion Sort', description: 'Builds a sorted array one element at a time by inserting each new item into its proper place.' },
    { id: 'mergeSort', name: 'Merge Sort', description: 'A divide-and-conquer algorithm that splits the array in half, sorts them, and merges them back' }
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
