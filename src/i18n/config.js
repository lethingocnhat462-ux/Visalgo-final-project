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
          "nav_home": "Home",
          "nav_algo": "Algorithms",
          "nav_team": "Our Team",
          "about_badge": "ABOUT PROJECT",
          "title": "What is Vis Algo?",
          "description": "An interactive learning platform that turns complex algorithms into vivid visual experiences.",
          "hero_title": "Visualize Sorting Algorithms",
          "hero_subtitle": "Master sorting logic through step-by-step simulations.",
          "get_started": "Get Started",
          "role_leader": "Project Leader",
          "role_ui": "Development UI",
          "role_content": "Documentaries & Content",
          "role_styles": "Styles & Header",
          "role_algo_logic": "Logic Algorithms",
          

        "about_hero_title": "Explore Vis-Algo",
        "about_hero_subtitle": "A streamlined and efficient approach to visualizing algorithms.",
        "vision_title": "Strategic Vision",
        "vision_desc": "Removing the barriers between dry theory and visual practice.",

        "convention_title": "Convention",
          // Features
          "feat_1_title": "Easy to Understand",
          "feat_1_desc": "Detailed step-by-step logic illustration.",
          "feat_2_title": "Visual",
          "feat_2_desc": "Clear colors distinguish data states.",
          "feat_3_title": "Friendly",
          "feat_3_desc": "Optimized interface for modern learning.",
          
          // Algorithm Names & Descriptions
          "algo_list_title": "Select Algorithm",
          "bubble": "Bubble Sort",
          "insertion": "Insertion Sort",
          "merge": "Merge Sort",
          "bubble_sort": "Bubble Sort",
          "insertion_sort": "Insertion Sort",
          "merge_sort": "Merge Sort",
          "bubble_sort_desc": "Repeatedly swaps adjacent elements if they are in the wrong order.",
          "insertion_sort_desc": "Builds a sorted array by inserting each new item into its proper place.",
          "merge_sort_desc": "Splits the array in half, sorts them, and merges them back together.",

          // Visualization Page Labels
          "single_mode": "Single Mode",
          "race_mode": "Race Mode",
          "array_label": "Array",
          "speed_label": "Speed",
          "init_guide_text": "Enter the array and click Initial value to start.",
          "start": "Start run",
          "stop": "Stop",
          "restart": "Initial value",

          // Complexity & Pseudocode
          "pseudocode_title": "Pseudocode",
          "complexity_title": "Complexity Analysis",
          "worst_case": "Worst Case",
          "best_case": "Best Case",
          "space_complexity": "Space Complexity",
          "bubble_desc_detail": "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
          "insertion_desc_detail": "Insertion Sort builds the final sorted array one item at a time, with the benefit of being efficient for small data sets.",
          "merge_desc_detail": "Merge Sort is an efficient, stable, divide-and-conquer sorting algorithm.",

          // About & Team (giữ nguyên các key của bạn...)
          "about_label": "Knowledge Base",
          "status_default": "Default: Waiting",
          "status_progress": "In Progress: Comparison and Swapping",
          "status_finished": "Finished: Done",
          "our_team_title": "Our Team",

          "nav_sandbox": "Sandbox",
          "sandbox_title": "Algorithm Sandbox",
      "sandbox_subtitle": "Write your code - Visualize the result",
      "editor_label": "Code Editor (JavaScript)",
      "visual_label": "Visualization",
      "btn_run": "Run Algorithm",
      "btn_reset": "New Array",
      "error_syntax": "Syntax Error",
      "error_return": "Error: Your sort function must return an array!"
        }
      },
      vi: {
        translation: {
          "nav_home": "Trang chủ",
          "nav_algo": "Thuật toán",
          "nav_team": "Thành viên",
          "about_badge": "VỀ DỰ ÁN",
          "title": "Vis Algo là gì?",
          "description": "Nền tảng học tập tương tác, biến các thuật toán phức tạp thành trải nghiệm hình ảnh sinh động.",
          "hero_title": "Trực Quan Hóa Thuật Toán Sắp Xếp",
          "hero_subtitle": "Giúp bạn nắm vững logic sắp xếp thông qua mô phỏng từng bước rõ ràng.",
          "get_started": "Bắt đầu ngay",

          "role_leader": "Trưởng nhóm & Logic",
          "role_ui": "Phát triển giao diện",
          "role_content": "Tài liệu & Nội dung",
          "role_styles": "Thiết kế Styles",
          "role_algo_logic": "Logic thuật toán",

          "about_hero_title": "Khám phá Vis-Algo",
          "about_hero_subtitle": "Cách tiếp cận tinh gọn và hiệu quả để trực quan hóa thuật toán.",
          "vision_title": "Tầm nhìn chiến lược",
          "vision_desc": "Loại bỏ rào cản giữa lý thuyết khô khan và thực hành trực quan.",

          "convention_title": "Quy ước màu sắc",

          "feat_1_title": "Dễ hiểu",
          "feat_1_desc": "Minh họa logic từng bước một cách chi tiết.",
          "feat_2_title": "Trực quan",
          "feat_2_desc": "Màu sắc phân biệt rõ ràng các trạng thái dữ liệu.",
          "feat_3_title": "Thân thiện",
          "feat_3_desc": "Giao diện tối ưu cho trải nghiệm học tập hiện đại.",

          "algo_list_title": "Danh sách thuật toán",
          "bubble": "Sắp xếp nổi bọt",
          "insertion": "Sắp xếp chèn",
          "merge": "Sắp xếp trộn",
          "bubble_sort": "Sắp xếp nổi bọt",
          "insertion_sort": "Sắp xếp chèn",
          "merge_sort": "Sắp xếp trộn",
          "bubble_sort_desc": "Liên tục tráo đổi các phần tử liền kề nếu sai thứ tự cho đến khi mảng được sắp xếp.",
          "insertion_sort_desc": "Xây dựng mảng đã sắp xếp bằng cách chèn từng phần tử mới vào đúng vị trí.",
          "merge_sort_desc": "Chia đôi mảng để sắp xếp rồi sau đó trộn chúng lại với nhau.",

          // Visualization Page Labels
          "single_mode": "Chế độ đơn",
          "race_mode": "Chế độ đua",
          "array_label": "Mảng dữ liệu",
          "speed_label": "Tốc độ",
          "init_guide_text": "Nhập mảng và nhấn Khởi tạo để bắt đầu.",
          "start": "Bắt đầu chạy",
          "stop": "Dừng lại",
          "restart": "Khởi tạo",

          // Complexity & Pseudocode
          "pseudocode_title": "Mã giả",
          "complexity_title": "Phân tích độ phức tạp",
          "worst_case": "Trường hợp xấu nhất",
          "best_case": "Trường hợp tốt nhất",
          "space_complexity": "Độ phức tạp không gian",
          "bubble_desc_detail": "Sắp xếp nổi bọt là một thuật toán đơn giản, liên tục duyệt qua danh sách, so sánh các cặp phần tử liền kề và tráo đổi chúng nếu sai thứ tự.",
          "insertion_desc_detail": "Sắp xếp chèn xây dựng mảng được sắp xếp cuối cùng từng phần tử một, có hiệu quả với các tập dữ liệu nhỏ.",
          "merge_desc_detail": "Sắp xếp trộn là một thuật toán sắp xếp dựa trên kỹ thuật chia để trị, có hiệu suất cao và ổn định.",

          "about_label": "Kho kiến thức",
          "status_default": "Mặc định: Đang chờ",
          "status_progress": "Đang thực hiện: So sánh và Tráo đổi",
          "status_finished": "Hoàn thành: Xong",
          "our_team_title": "Đội ngũ của chúng tôi",

          "nav_sandbox": "Sân chơi",
          "sandbox_title": "Môi trường thực hành thuật toán",
      "sandbox_subtitle": "Tự tay viết mã - Trực quan kết quả",
      "editor_label": "Trình soạn thảo (JavaScript)",
      "visual_label": "Trực quan hóa",
      "btn_run": "Chạy thuật toán",
      "btn_reset": "Tạo mảng mới",
      "error_syntax": "Lỗi cú pháp",
      "error_return": "Lỗi: Hàm sort của bạn phải trả về một mảng!"
        }
      }
    }
  });

export default i18n;