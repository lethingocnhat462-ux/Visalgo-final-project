import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import VisualizationPage from "./pages/VisualizationPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    // Thêm basename chính xác với tên thư mục xuất hiện trên URL của bạn
    <BrowserRouter basename="/visalgo-final-project">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visualization/:algo" element={<VisualizationPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Route này sẽ chỉ hiện khi nhập sai sau cụm /visalgo-final-project */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
