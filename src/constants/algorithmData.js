export const ALGO_INFO = {
  bubble: {
    name: "Bubble Sort",
    worstCase: "O(n²)",
    averageCase: "Θ(n²)",
    bestCase: "Ω(n)",
    spaceComplexity: "O(1)",
    description: "Repeatedly traverse the array, compare adjacent elements, and swap them if they are out of order. Larger elements will 'bubble' to the end of the array.",
    pseudocode: [
      "do",
      "  swapped = false",
      "  for i = 0 to n-2",
      "    if array[i] > array[i+1]",
      "      swap(array[i], array[i+1])",
      "      swapped = true",
      "while swapped"
    ]
  },
  selection: {
    name: "Selection Sort",
    worstCase: "O(n²)",
    averageCase: "Θ(n²)",
    bestCase: "Ω(n²)",
    spaceComplexity: "O(1)",
    description: "Split the array into sorted and unsorted sections. Continuously find the smallest unsorted element and append it to the sorted section.",
    pseudocode: [
      "for i = 0 to n-1",
      "  minIndex = i",
      "  for j = i+1 to n-1",
      "    if array[j] < array[minIndex]",
      "      minIndex = j",
      "  swap(array[i], array[minIndex])"
    ]
  },
  insertion: {
    name: "Insertion Sort",
    worstCase: "O(n²)",
    averageCase: "Θ(n²)",
    bestCase: "Ω(n)",
    spaceComplexity: "O(1)",
    description: "Construct a sorted sub-array by iteratively removing elements from the unsorted portion and inserting them into their proper place in the sorted portion.",
    pseudocode: [
      "for i = 1 to n-1",
      "  key = array[i]",
      "  j = i - 1",
      "  while j >= 0 and array[j] > key",
      "    array[j + 1] = array[j]",
      "    j = j - 1",
      "  array[j + 1] = key"
    ]
  }
};