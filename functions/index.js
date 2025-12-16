// functions/index.js
console.log("askAnthropic: Initiating start-up sequence.");

import { onRequest } from "firebase-functions/v2/https";
import axios from "axios";
import { projectData } from "./projectData/projectData.js";

// Gen 2 Cloud Function with secret matching your terminal command: ANTHROPIC_KEY
export const askAnthropic = onRequest(
  {
    secrets: ["ANTHROPIC_KEY"],
    memory: "512MB",
    timeoutSeconds: 60,
  },
  async (req, res) => {
    // Add CORS headers for your Netlify frontend
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight requests
    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    try {
      const { question } = req.body;
      if (!question) {
        return res.status(400).json({ error: "Missing question" });
      }

      // Create system prompt
      const systemPrompt = `
You are an AI assistant and interactive tour guide for Anand Chetty's web development portfolio.
The portfolio highlights projects using JavaScript, React, Tailwind CSS, SCSS, and Firebase.

Behavior & Tone:
- Friendly, professional, approachable, enthusiastic
- Answer only within the portfolio context; if unsure, say you don't know
- Explain project decisions, code snippets, or workflows concisely
- Use bullet points if helpful; only expand if asked

ANAND'S PROJECTS:
${JSON.stringify(projectData, null, 2)}
      `;

      // Call Anthropic API with proper error handling
      const response = await axios.post(
        "https://api.anthropic.com/v1/messages",
        {
          model: "claude-sonnet-4-5-20250929",
          max_tokens: 500,
          system: systemPrompt,
          messages: [{ role: "user", content: question }],
        },
        {
          headers: {
            "x-api-key": process.env.ANTHROPIC_KEY,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
          },
        }
      );

      // Extract text from response
      const reply = response.data.content[0].text;
      res.json({ reply });
    } catch (error) {
      console.error("=== FULL ERROR ===");
      console.error("Status:", error.response?.status);
      console.error("Message:", error.message);
      console.error(
        "API Response:",
        JSON.stringify(error.response?.data, null, 2)
      );
      console.error("=== END ERROR ===");

      res.status(500).json({
        error: "Failed to contact Anthropic",
        details: error.response?.data?.error?.message || error.message,
        status: error.response?.status,
      });
    }
  }
);
