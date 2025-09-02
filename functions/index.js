// functions/index.js
// ADD THIS console.log AT THE VERY TOP AGAIN
console.log("askAnthropic: Initiating start-up sequence.");

import { onRequest } from "firebase-functions/v2/https";
import axios from "axios";
import { projectData } from "./projectData/projectData.js";

// Gen 2 Cloud Function with secret
export const askAnthropic = onRequest(
  { secrets: ["ANTHROPIC_API_KEY"] },
  async (req, res) => {
    // Add CORS headers
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    try {
      const { question } = req.body;
      if (!question) return res.status(400).json({ error: "Missing question" });

      // Create system prompt
      const systemPrompt = `
You are an AI assistant and interactive tour guide for Anand Chetty's web development portfolio.
The portfolio highlights projects using JavaScript, React, Tailwind CSS, SCSS, and Firebase.

Behavior & Tone:
- Friendly, professional, approachable, enthusiastic
- Answer only within the portfolio context; if unsure, say you don't know
- Explain project decisions, code snippets, or workflows concisely
- Use bullet points if helpful; only expand if asked
- Reference React components, props, hooks (useState, useEffect, useReducer), Tailwind/SCSS, Firebase functions, and APIs

ANAND'S PROJECTS:
${JSON.stringify(projectData, null, 2)}
      `;

      // Call Anthropic API
      const response = await axios.post(
        "https://api.anthropic.com/v1/messages",
        {
          model: "claude-3-5-sonnet-20241022",
          max_tokens: 500,
          system: systemPrompt,
          messages: [{ role: "user", content: question }],
        },
        {
          headers: {
            "x-api-key": process.env.ANTHROPIC_API_KEY,
            "Content-Type": "application/json",
            "anthropic-version": "2023-06-01",
          },
        }
      );

      res.json({ reply: response.data.content[0].text });
    } catch (error) {
      console.error("Error calling Anthropic:", error);
      res.status(500).json({ error: "Failed to contact Anthropic" });
    }
  }
);
