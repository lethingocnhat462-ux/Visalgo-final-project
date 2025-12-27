import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false 
    },
    resources: {
      en: {
        translation: {
          // --- THANH ĐIỀU HƯỚNG (NAVBAR) ---
          "nav_home": "Home",
          "nav_algo": "Algorithms",
          "nav_team": "Our Team",

          // --- TRANG CHỦ (HOMEPAGE) ---
          "about_badge": "About Project",
          "title": "What is Vis Algo?",
          "description": "An interactive learning platform that turns complex algorithms into vivid visual experiences.",
          "hero_title": "Visualize Sorting Algorithms",
          "hero_subtitle": "Master sorting logic through step-by-step simulations.",
          "get_started": "Get Started",

          // --- TÍNH NĂNG (FEATURES) ---
          "feat_1_title": "Easy to Understand",
          "feat_1_desc": "Detailed step-by-step logic illustration.",
          "feat_2_title": "Visual",
          "feat_2_desc": "Clear colors distinguish data states.",
          "feat_3_title": "Friendly",
          "feat_3_desc": "Optimized interface for modern learning.",

          // --- DANH SÁCH THUẬT TOÁN (ALGORITHMS PAGE) ---
          "algo_list_title": "Select Algorithm",
          "bubble_sort": "Bubble Sort",
          "selection_sort": "Selection Sort",
          "insertion_sort": "Insertion Sort",
          "quick_sort": "Quick Sort",
          "merge_sort": "Merge Sort",

          // --- TRANG MÔ PHỎNG (VISUALIZER PAGE) ---
          "algo_label": "Algorithm",
          "race_mode": "RACE MODE",
          "input_array": "Array",
          "speed": "Speed",
          "reset": "Reset",
          "start": "Start"
        }
      },
      vi: {
        translation: {
          // --- THANH ĐIỀU HƯỚNG (NAVBAR) ---
          "nav_home": "Trang chủ",
          "nav_algo": "Thuật toán",
          "nav_team": "Thành viên",

          // --- TRANG CHỦ (HOMEPAGE) ---
          "about_badge": "Về dự án",
          "title": "Vis Algo là gì?",
          "description": "Nền tảng học tập tương tác, biến các thuật toán phức tạp thành trải nghiệm hình ảnh sinh động.",
          "hero_title": "Trực Quan Hóa Thuật Toán Sắp Sếp",
          "hero_subtitle": "Giúp bạn nắm vững logic sắp xếp thông qua mô phỏng từng bước rõ ràng.",
          "get_started": "Bắt đầu ngay",

          // --- TÍNH NĂNG (FEATURES) ---
          "feat_1_title": "Dễ hiểu",
          "feat_1_desc": "Minh họa logic từng bước một cách chi tiết.",
          "feat_2_title": "Trực quan",
          "feat_2_desc": "Màu sắc phân biệt rõ ràng các trạng thái dữ liệu.",
          "feat_3_title": "Thân thiện",
          "feat_3_desc": "Giao diện tối ưu cho trải nghiệm học tập hiện đại.",

          // --- DANH SÁCH THUẬT TOÁN (ALGORITHMS PAGE) ---
          "algo_list_title": "Chọn thuật toán",
          "bubble_sort": "Sắp xếp nổi bọt",
          "selection_sort": "Sắp xếp chọn",
          "insertion_sort": "Sắp xếp chèn",
          "quick_sort": "Sắp xếp nhanh",
          "merge_sort": "Sắp xếp trộn",

          // --- TRANG MÔ PHỎNG (VISUALIZER PAGE) ---
          "algo_label": "Thuật toán",
          "race_mode": "CHẾ ĐỘ ĐUA",
          "input_array": "Mảng",
          "speed": "Tốc độ",
          "reset": "Khởi tạo",
          "start": "Bắt đầu chạy"
        }
      }
    }
  });

export default i18n;