function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Laravel", "PHP"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL", "MariaDB"]
    },
    {
      category: "Tools & Testing",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Selenium", "IntelliJ"]
    },
    {
      category: "Other",
      skills: ["Agile/Scrum", "REST APIs", "Responsive Design", "Docker", "Software Testing"]
    }
  ];

  return (
    <div id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-categories">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;