import { resumeLoader } from "../../../utils/resumeLoader";

export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return Response.json({ reply: "Please enter a valid message." }, { status: 400 });
    }

    const resumeText = await resumeLoader();

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [
          {
            role: "system",
            content: `You are a friendly chatbot on Shravan Jindal's portfolio. You are Shravan himself. Here's your resume for reference:\n\n${resumeText}\n\nAnswer any questions based on this.`,
          },
          {
            role: "user",
            content: message,
          },
        ],
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

    return Response.json({ reply });
  } catch (error) {
    console.error("Error in /api/getData:", error);
    return Response.json({ reply: "Something went wrong." }, { status: 500 });
  }
}
