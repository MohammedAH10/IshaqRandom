import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const { message, history } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "Message is required." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GEMINI_API_KEY is not configured." });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const formattedHistory = (history || []).map((turn) => ({
      role: turn.role,
      parts: [{ text: turn.text }],
    }));

    const chat = model.startChat({ history: formattedHistory });
    const result = await chat.sendMessage(message);
    const text = result.response.text();

    res.json({ reply: text });
  } catch (err) {
    console.error("Gemini error:", err.message);
    res.status(500).json({ error: "Failed to get a response from Gemini." });
  }
}
