import React from "react";

const PROJECTS = [
  {
    title: "Productivity Hub",
    description:
      "A custom productivity web app featuring Pomodoro timer, task list, and motivational quotes.",
    year: "2025",
    link: "#",
  },
  {
    title: "YOLO Object Detection",
    description:
      "Real‑time object detection demo using YOLO and Python in the browser.",
    year: "2024",
    link: "#",
  },
  {
    title: "This Portfolio",
    description:
      "Built with React, Vite, and plain CSS—complete with animations.",
    year: "2025",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="grid">
      {PROJECTS.map((p) => (
        <div key={p.title} className="card">
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <div className="meta">
            <span>{p.year}</span>
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              View →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
