import { handleInput } from "../salonChat";
import { useState } from "react";
export default function AIView() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  function send() {
    let replies = handleInput(input);

    setMessages([...messages, "You: " + input, ...replies]);
    setInput("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple Salon</h2>

      <div style={{
        border: "1px solid #ccc",
        height: "300px",
        overflowY: "auto",
        marginBottom: "10px",
        padding: "10px"
      }}>
        {messages.map((m, i) => (
          <p key={i}>{m}</p>
        ))}
      </div>

      <div>
        <button onClick={() => setInput("buzz")}>Buzz Cut</button>
        <button onClick={() => setInput("regular")}>Regular Cut</button>
        <button onClick={() => setInput("1")}>1 Blade</button>
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