// functions/index.js
console.log("askAnthropic: Initiating start-up sequence.");

import { onRequest } from "firebase-functions/v2/https";
import axios from "axios";
import { projectData } from "./projectData/projectData.js";

// Gen 2 Cloud Function with secret matching your terminal command: ANTHROPIC_KEY
export const askAnthropic = onRequest(
  { secrets: ["ANTHROPIC_KEY"] },
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

      // Call Anthropic API
      const response = await axios.post(
        "api.anthropic.com",
        {
          model: "claude-3-5-sonnet-20241022",
          max_tokens: 500,
          system: systemPrompt,
          messages: [{ role: "user", content: question }],
        },
        {
          headers: {
            // Using the secret name you set in terminal
            "x-api-key": process.env.ANTHROPIC_KEY,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
          },
        }
      );

      // Send the Claude response back to your React frontend
      res.json({ reply: response.data.content[0].text });
    } catch (error) {
      // Detailed error logging to Firebase Console
      console.error(
        "Error calling Anthropic:",
        error.response?.data || error.message
      );
      res.status(500).json({
        error: "Failed to contact Anthropic",
        details:
          error.response?.data?.error?.message || "Unknown internal error",
      });
    }
  }
);
