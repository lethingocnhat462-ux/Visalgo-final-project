export const ALGO_INFO = {
  bubble: {
    name: "Sắp xếp nổi bọt (Bubble Sort)",
    worstCase: "O(n²)",
    averageCase: "Θ(n²)",
    bestCase: "Ω(n)",
    spaceComplexity: "O(1)",
    description: "Duyệt mảng nhiều lần, so sánh các cặp phần tử kề nhau và hoán đổi chúng nếu sai thứ tự. Các phần tử lớn nhất sẽ 'nổi' dần lên cuối mảng.",
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
    name: "Sắp xếp chọn (Selection Sort)",
    worstCase: "O(n²)",
    averageCase: "Θ(n²)",
    bestCase: "Ω(n²)",
    spaceComplexity: "O(1)",
    description: "Chia mảng thành hai phần: đã sắp xếp và chưa sắp xếp. Thuật toán liên tục tìm phần tử nhỏ nhất trong phần chưa sắp xếp và đưa nó về cuối phần đã sắp xếp.",
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
    name: "Sắp xếp chèn (Insertion Sort)",
    worstCase: "O(n²)",
    averageCase: "Θ(n²)",
    bestCase: "Ω(n)",
    spaceComplexity: "O(1)",
    description: "Xây dựng mảng đã sắp xếp bằng cách lấy từng phần tử từ phần chưa sắp xếp và 'chèn' nó vào đúng vị trí trong phần đã sắp xếp.",
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