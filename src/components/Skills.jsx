import React from 'react';
import '../Skills.css';

const CARDS = [
  {
    title: "What I can do",
    items: [
      "UI/UX Design",
      "Fullstack Web Development",
      "Mobile App Development",
      "Database Design",
      "API Integration",
    ]
  },
  {
    title: "Tools I Use",
    items: [
      "Tailwind CSS, React, TypeScript",
      "Node.js, Fastify, MongoDB, PostgreSQL",
      "Figma, Framer, Photoshop",
    ]
  },
  {
    title: "UI/UX Design",
    items: [
      "User‑Centered Design",
      "Modern & Clean UI",
      "Responsive Layouts",
      "Wireframes & Prototypes",
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="skills-title">Building Digital Experiences</h2>
        <p className="skills-sub">
          I specialize in creating stunning user interfaces and developing high‑quality applications that stand out.
        </p>
        <div className="skills-cards">
          {CARDS.map(c => (
            <div className="skills-card" key={c.title}>
              <h3>{c.title}</h3>
              <ul>
                {c.items.map(i => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="skills-footer">
          <a href="#projects" className="btn-view">View My Projects</a>
        </div>
      </div>
    </section>
  );
}
