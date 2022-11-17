import React from "react";
import github from "../assets/GitHub-Mark-64px.png";
import email from "../assets/icons8-circled-envelope-50.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/kyky19" alt="Github">
        <img className="logo" src={github} alt="GitHub" width="64"></img>
      </a>
      <a href="mailto:kyky19@me.com" alt="email">
        <img className="logo" src={email} alt="Email" width="64"></img>
      </a>
    </div>
  );
}
