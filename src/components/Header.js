import React from "react";

export default function Header() {
  return (
    <div className="hero">
      <h1 className="title" style={{ fontSize: "60px", fontFamily: "Acme" }}>
        Kyle Lane
      </h1>
      <p
        className="title"
        style={{ fontSize: "20px", fontFamily: "monospace" }}
      >
        Web Developer.
      </p>
    </div>
  );
}
