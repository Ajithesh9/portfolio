import React from "react";

export default function Navbar() {
  const links = ["Home", "Projects", "Skills", "Contact"];
  return (
    <nav>
      <div className="container inner">
        <div className="brand">Ajithesh</div>
        <ul>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}>{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
