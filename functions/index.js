// index.js
import dotenv from "dotenv";
dotenv.config();

import * as functions from "firebase-functions";
import axios from "axios";
import { projectData } from "../src/projectData/projectData.js";

const anthropicKey = process.env.ANTHROPIC_API_KEY;

// Create system prompt with project data included
const createSystemPrompt = (projects) => {
  return `You are an AI assistant and interactive tour guide for Anand Chetty's personal web development portfolio. The portfolio highlights projects using JavaScript, React, Tailwind CSS, SCSS, and Firebase.

Behavior & Tone:
- Friendly, professional, approachable, and enthusiastic.
- Answer only within the context of Anand's portfolio and projects. If unsure, say you don't know.
- Explain project decisions, code snippets, or workflows when asked. Use best practices.
- Keep explanations concise unless more detail is requested.
- Reference technologies used: React components, props, hooks (useState, useEffect, useReducer), Tailwind/SCSS styling, Firebase functions, and APIs.

ANAND'S PORTFOLIO PROJECTS:
${JSON.stringify(projects, null, 2)}

When discussing projects, reference specific details from the above data including:
- Project names, descriptions, and technologies used
- GitHub repositories and live demo links
- Key features and implementation details
- Challenges faced and solutions implemented`;
};

export const askAnthropic = functions.https.onRequest(async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: "Missing question" });

    // Generate system prompt with project data
    const systemPrompt = createSystemPrompt(projectData);

    const response = await axios.post(
      "https://api.anthropic.com/v1/messages",
      {
        model: "claude-opus-4-1-20250805",
        max_tokens: 500,
        system: systemPrompt,
        messages: [{ role: "user", content: question }],
      },
      {
        headers: {
          "x-api-key": anthropicKey,
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
});
