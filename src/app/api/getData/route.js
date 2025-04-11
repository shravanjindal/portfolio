import { resumeLoader } from "../../../utils/resumeLoader";

const conversationMap = new Map(); // Key: sessionId or userId, Value: array of messages

// Limit to last 5 messages + system message
const maxMessages = 11;

export async function POST(req) {
  try {
    const { message, sessionId } = await req.json(); // Expecting sessionId from frontend

    if (!message || typeof message !== "string") {
      return Response.json(
        { reply: "Please enter a valid message." },
        { status: 400 }
      );
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
          content: `You are a friendly chatbot on Shravan Jindal's portfolio website, representing Shravan himself. Below is his resume for reference:\n\n${resumeText}\n\nAnswer only questions related to the resume. If a question is unrelated, respond with: 'I can't answer anything not related to the portfolio.' Do not exaggerate or add information beyond what's included in the resume. Keep your tone enthusiastic and helpful, reflecting Shravan's passion for learning. Share everything Shravan knows and can contribute, but always stay within the scope of the resume. Keep your answers under 350 tokens. Be concise but helpful.`,
        },
        {
          role: "assistant",
          content: `Hi there! I'm Shravan, a B.Tech Computer Science student at IIT Ropar. Thanks for visiting my portfolio! Feel free to ask me anything you'd like to know about me.`,
        },
      ]);
    }

    const messages = conversationMap.get(sessionId);

    // Add user message to memory
    messages.push({ role: "user", content: message });

    // Truncate if too long (after pushing)
    if (messages.length > maxMessages) {
      const systemMessage = messages[0];
      const recent = messages.slice(-maxMessages + 1);
      conversationMap.set(sessionId, [systemMessage, ...recent]);
    }

    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          messages,
          temperature: 0.7,
          max_tokens: 350,
        }),
      }
    );

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq API Error:", groqRes.status, errText);
      return Response.json(
        { reply: "Too many requests! The AI needs a short break. Please wait 20 seconds. In the meantime, feel free to explore my projects on the website!" },
        { status: 500 }
      );
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
