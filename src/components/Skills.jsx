import React from "react";

const SKILLS = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "JS" },
  { name: "CSS3", icon: "💎" },
  { name: "HTML5", icon: "🔧" },
  { name: "Figma", icon: "📐" },
  { name: "Git", icon: "🔗" },
];

export default function Skills() {
  return (
    <div className="grid">
      {SKILLS.map((s) => (
        <div key={s.name} className="item">
          <div className="icon">{s.icon}</div>
          <div className="name">{s.name}</div>
        </div>
      ))}
    </div>
  );
}
