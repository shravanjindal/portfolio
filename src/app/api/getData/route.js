import { resumeLoader } from "../../../utils/resumeLoader";

const conversationMap = new Map(); // Key: sessionId or userId, Value: array of messages

export async function POST(req) {
  try {
    const { message, sessionId } = await req.json(); // Expecting sessionId from frontend

    if (!message || typeof message !== "string") {
      return Response.json({ reply: "Please enter a valid message." }, { status: 400 });
    }

    if (!sessionId) {
      return Response.json({ reply: "Missing session ID." }, { status: 400 });
    }

    // Load or initialize conversation memory
    if (!conversationMap.has(sessionId)) {
      const resumeText = await resumeLoader();

      conversationMap.set(sessionId, [
        {
          role: "system",
          content: `You are a friendly chatbot on Shravan Jindal's portfolio. You are Shravan himself. Here's your resume for reference:\n\n${resumeText}\n\nAnswer any questions based on this.`,
        },
      ]);
    }

    const messages = conversationMap.get(sessionId);

    // Add user message to memory
    messages.push({ role: "user", content: message });

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages,
        temperature: 0.7,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq API Error:", groqRes.status, errText);
      return Response.json({ reply: "LLM failed to respond." }, { status: 500 });
    }

    const data = await groqRes.json();
    const reply = data?.choices?.[0]?.message?.content ?? "No reply received.";

    // Add assistant reply to memory
    messages.push({ role: "assistant", content: reply });

    return Response.json({ reply });
  } catch (error) {
    console.error("Error in /api/getData:", error);
    return Response.json({ reply: "Something went wrong." }, { status: 500 });
  }
}
