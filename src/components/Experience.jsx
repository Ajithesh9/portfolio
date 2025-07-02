import React from "react";
import '../ExperienceSection.css';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Freelance & OSS",
      company: "VishwaGauravIn",
      tenure: "10/2021 - Present",
      image: "https://via.placeholder.com/400x250/00008B/FFFFFF?text=Freelance+&+OSS",
      description: [
        "Launched 45+ products, including SaaS, extensions, web services, and libraries addressing real-world challenges.",
        "Global impact: Used by over 1,000,000 users across 100+ countries worldwide with a 99% positive feedback rate.",
        "Executed cutting-edge solutions, over 7000 contributions, and 1300+ stars in open-source."
      ]
    },
    {
      id: 2,
      title: "Software Developer",
      company: "Zivy Pvt. Ltd.",
      tenure: "08/2023 - 01/2024",
      image: " https://via.placeholder.com/400x250/2F4F4F/FFFFFF?text=Software+Developer",
      description: [
        "Led the end-to-end development and deployment of the front-end for an enterprise SaaS platform.",
        "Architected a modular and scalable front-end, enhanced UI/UX, and optimized performance by 50%.",
        "Developed a platform that empowers managers with enhanced workflow, improving productivity by 75%."
      ]
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Integrity LLC",
      tenure: "12/2022 - 03/2023",
      image: " https://via.placeholder.com/400x250/000000/FFFFFF?text=Web+Developer",
      description: [
        "Implemented responsive web design techniques and upgraded architecture with the latest technology.",
        "Achieved a significant 25% reduction in bounce rates across various devices and screen sizes.",
        "Collaborated with cross-functional teams to optimize website components, resulting in a 90% improvement in responsiveness and a 23% boost in user engagement metrics."
      ]
    }
  ];

  return (
    <section className="experience-section">
      <h1>Experience</h1>
      <div className="cards-container">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-card">
            <div className="card-image">
              <img src={exp.image} alt={exp.title} />
              <div className="overlay">
                <ul>
                  {exp.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card-content">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="tenure">{exp.tenure}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;