import React, { useState } from "react";

// You must include this in your HTML or CSS for the Minecraft-style font:
// <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />

const QuestCard = () => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleLinkClick = () => {
    window.open("https://meet.google.com/yhg-mxqa-ion");
  };

  const handleCodeCheck = () => {
    if (
      code.toLowerCase().replace(/,/g, "").replace(/\s+/g, "") === "qh5qh2#"
    ) {
      setMessage(
        "🎉 Congratulations! Your next clue: put the empty paper from the box in the water"
      );
    } else {
      setMessage("❌ Incorrect code. Try again.");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        padding: "20px",
        background: "linear-gradient(#7ec850, #5d9124)", // Minecraft grass/dirt style
        border: "8px solid #3e3e3e",
        borderRadius: "6px",
        fontFamily: "'Press Start 2P', monospace",
        color: "#fff",
        textAlign: "center",
        boxShadow: "0 0 15px rgba(0,0,0,0.5)",
      }}
    >
      <h2 style={{ fontSize: "14px", marginBottom: "20px" }}>Secret Access</h2>

      {/* Link Button */}
      <button
        onClick={handleLinkClick}
        style={{
          backgroundColor: "#3c8527",
          border: "4px solid #1e3e13",
          color: "#fff",
          fontFamily: "'Press Start 2P', monospace",
          padding: "10px 18px",
          fontSize: "10px",
          cursor: "pointer",
          marginBottom: "20px",
          textShadow: "1px 1px #000",
        }}
      >
        Press here to find the secret code
      </button>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter secret code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{
            fontFamily: "'Press Start 2P', monospace",
            padding: "10px",
            fontSize: "10px",
            width: "80%",
            border: "4px solid #1e3e13",
            outline: "none",
            backgroundColor: "#cde6af",
            color: "#333",
            marginBottom: "10px",
          }}
        />
      </div>

      {/* Check Code Button */}
      <button
        onClick={handleCodeCheck}
        style={{
          backgroundColor: "#ba6c1e",
          border: "4px solid #4a2f0f",
          color: "#fff",
          fontFamily: "'Press Start 2P', monospace",
          padding: "10px 18px",
          fontSize: "10px",
          cursor: "pointer",
          textShadow: "1px 1px #000",
        }}
      >
        ✅ Check Code
      </button>

      {/* Message */}
      {message && (
        <p
          style={{
            marginTop: "20px",
            fontSize: "12px",
            textShadow: "1px 1px #000",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default QuestCard;
