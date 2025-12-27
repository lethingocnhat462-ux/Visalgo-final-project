import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("YOUR_GEMINI_API_KEY");

export const askAI = async (algo, array, description) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Bạn là một chuyên gia thuật toán. Tôi đang quan sát mô phỏng thuật toán ${algo}. 
                    Trạng thái mảng hiện tại: [${array.join(", ")}]. 
                    Hành động hiện tại: "${description}".
                    Hãy giải thích ngắn gọn (dưới 100 chữ) bằng tiếng Việt tại sao lại có bước này và mục đích của nó là gì?`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("AI Error:", error);
    return "Rất tiếc, AI đang bận một chút. Bạn hãy thử lại sau nhé!";
  }
};