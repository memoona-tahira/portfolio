function Projects() {
  const projects = [
    {
      title: "React + Node Full Stack App",
      description: "Full-stack application with OAuth login and external API integration for managing user-specific Cookbook collection. Built with React, Node.js, and MongoDB.",
      link: "https://github.com/chas-academy/u09-business-project-teammt",
      demo: "https://u09-frontend.onrender.com"
    },
    {
      title: "IMDb Clone (Laravel)",
      description: "A full-featured movie database clone with genre management, filtering capabilities, and user authentication. Built with Laravel and MySQL.",
      link: "https://github.com/chas-academy/u04-imdb-klon-plottwisters",
    },
    {
      title: "Books & Authors REST API",
      description: "A RESTful API with full CRUD functionality, professional documentation, and MongoDB integration. Built with Node.js, Express, and MongoDB.",
      link: "https://github.com/memoona-tahira/book-collection-api",
    },
    {
      title: "Järfällahus Information Platform",
      description: "Information and CMS platform adaptable for B2B themes. Features content management and customizable interface.",
      link: "#", 
    },
  ];

  return (
    <div id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                View on GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-demo"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;