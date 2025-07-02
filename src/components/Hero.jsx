import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div>
        <h1>Crafting Beautiful Web Experiences</h1>
        <p>
          Hi, I’m <span style={{ color: "#3CE5AB" }}>Ajithesh</span> — a frontend
          developer specializing in responsive, accessible, and high‑performance
          interfaces.
        </p>
        <div className="cta">
          <button className="btn btn-primary">View Projects</button>
          <button className="btn btn-outline">Hire Me</button>
        </div>
      </div>
    </section>
  );
}
