export const bubbleSortSteps = (array) => {
  const steps = [];
  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Bước 1: So sánh
      steps.push({ array: [...arr], indices: [j, j + 1], status: 'comparing' });
      
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // Bước 2: Hoán đổi
        steps.push({ array: [...arr], indices: [j, j + 1], status: 'swapping' });
      }
    }
    // Đánh dấu phần tử cuối đã xong
    steps.push({ array: [...arr], indices: [n - i - 1], status: 'sorted' });
  }
  steps.push({ array: [...arr], indices: [], status: 'sorted' });
  return steps;
};