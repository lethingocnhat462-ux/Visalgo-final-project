export const mergeSort = (array) => {
  const steps = [];
  const helper = (arr, start, end) => {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);
    helper(arr, start, mid);
    helper(arr, mid + 1, end);
    merge(arr, start, mid, end);
  };

  const merge = (arr, start, mid, end) => {
    let left = arr.slice(start, mid + 1);
    let right = arr.slice(mid + 1, end + 1);
    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
      steps.push({ array: [...arr], indices: [start + i, mid + 1 + j], status: 'comparing' });
      if (left[i] <= right[j]) {
        arr[k++] = left[i++];
      } else {
        arr[k++] = right[j++];
      }
      steps.push({ array: [...arr], indices: [k - 1], status: 'swapping' });
    }
    while (i < left.length) arr[k++] = left[i++];
    while (j < right.length) arr[k++] = right[j++];
    steps.push({ array: [...arr], indices: Array.from({length: end-start+1}, (_, idx) => start + idx), status: 'sorted' });
  };

  const finalArr = [...array];
  helper(finalArr, 0, finalArr.length - 1);
  return steps;
};