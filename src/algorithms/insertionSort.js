export const insertionSortSteps = (array) => {
  const steps = [];
  const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    steps.push({ array: [...arr], indices: [i], status: 'comparing' });

    while (j >= 0 && arr[j] > key) {
      steps.push({ array: [...arr], indices: [j, j + 1], status: 'swapping' });
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    steps.push({ array: [...arr], indices: [j + 1], status: 'sorted' });
  }
  return steps;
};