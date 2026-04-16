import React, { useState } from "react";
import { handleInput } from "../salonChat";

export default function AIView() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  function send() {
    let replies = handleInput(input);

    setMessages([...messages, "You: " + input, ...replies]);
    setInput("");
  }

  // start chat once
  if (messages.length === 0) {
    let start = handleInput("");
    setMessages(start);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Salon</h2>

      <div
        style={{
          border: "1px solid #ccc",
          height: "300px",
          overflowY: "auto",
          marginBottom: "10px",
          padding: "10px"
        }}
      >
        {messages.map((m, i) => (
          <p key={i}>{m}</p>
        ))}
      </div>

      {/* Buttons */}
      <div>
        <button onClick={() => setInput("haircut")}>Haircut</button>
        <button onClick={() => setInput("colour")}>Hair Colour</button>
        <button onClick={() => setInput("short")}>Short</button>
        <button onClick={() => setInput("long")}>Long</button>
        <button onClick={() => setInput("basic")}>Basic</button>
        <button onClick={() => setInput("full")}>Full</button>
      </div>

      <br />

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type here..."
      />

      <button onClick={send}>Send</button>
    </div>
  );
}