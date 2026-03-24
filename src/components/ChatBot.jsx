import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Draggable from "react-draggable";
import { MessageCircle } from "lucide-react";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(320);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const nodeRef = useRef(null);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      // ✅ Updated URL logic for 2025 Gen 2 Functions
      const baseUrl =
        window.location.hostname === "localhost"
          ? "http://localhost:5001/my-portfolio-cd16e/us-central1/askAnthropic"
          : "https://askanthropic-hdk7woyz5a-uc.a.run.app";

      // ✅ Fetch the baseUrl directly (no extra /askAnthropic for production)
      const res = await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [...prev, { sender: "ai", text: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: "Error: no response" },
        ]);
      }
    } catch (err) {
      console.error("ChatBot error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Error: could not reach server" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!isOpen) {
    return (
      <button
        className="w-[90%] bg-gradient-to-r from-orange-400/30 to-rose-300/30 hover:from-orange-400/60 hover:to-rose-300/50 text-white px-2 py-3 rounded shadow-lg flex items-center transition-all duration-500 hover:scale-105 hover:shadow-xl mt-1"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="size-5" />
        Open Chat
      </button>
    );
  }

  return (
    <Draggable nodeRef={nodeRef} cancel=".no-drag">
      <div
        ref={nodeRef}
        className="fixed bottom-4 left-70 bg-gray-900 text-white rounded shadow-lg flex flex-col resize overflow-hidden
             w-11/12 max-w-sm md:w-96 lg:w-[320px]"
        style={{ height: height }}
      >
        <div className="flex justify-between items-center p-2 bg-gradient-to-r from-orange-400/40 to-rose-300/30 cursor-move">
          <h2 className="text-lg font-semibold">Portfolio Guide</h2>
          <button
            className="text-white px-2 py-1 hover:bg-gray-700 rounded no-drag"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>

        <div
          className="flex-1 overflow-y-auto p-2 space-y-1 no-drag"
          aria-live="polite"
        >
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`inline-block px-2 py-1 rounded break-words max-w-[80%] ${
                  msg.sender === "user" ? "bg-blue-700" : "bg-gray-700"
                }`}
              >
                {msg.sender === "ai" ? (
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSend} className="flex gap-2 p-2 no-drag">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-2 py-1 rounded text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-green-600 px-3 rounded hover:bg-green-700 transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </Draggable>
  );
}
