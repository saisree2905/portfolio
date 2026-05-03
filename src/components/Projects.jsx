function Projects() {
  const projects = [

        {
      title: "Movie Review Platform",
      description:
        "A full-stack movie discovery and review web app featuring authentication, trending movies, and TMDB API integration.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
      live: "https://movie-review-frontend-swart.vercel.app/",
      github: "https://github.com/saisree2905/movie-review-platform",
    },

    {
      title: "NeuroFleetX",
      description:
        "A Java Spring Boot based fleet management system with user management, data tracking, and backend service integration.",
      tech: ["Java", "Spring Boot", "REST APIs"],
      github: "https://github.com/saisree2905/NeuroFleetx-Final",
    },
    {
      title: "Airbnb Clone (MERN Stack)",
      description:
        "A property rental platform with authentication, listings, bookings, and responsive UI built using the MERN stack.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/saisree2905/CodeAlpha_Project_ArtificialIntelligenceChatbot",
    },
    {
      title: "Food Delivery Database System",
      description:
        "A database-driven system designed to manage restaurants, customers, orders, and delivery tracking using SQL.",
      tech: ["MySQL", "Database Design", "SQL"],
      github: "https://github.com/saisree2905/CodeAlpha_Project_StudentGradeTracker",
    },
  ];

  return (
    <section id="projects" className="py-28 px-6 flex justify-center bg-slate-900">
      <div className="max-w-7xl w-full">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          Featured{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-indigo-500/40 transition"
            >
              <div>
                <h3 className="text-lg font-semibold mb-3 text-indigo-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-slate-800 border border-slate-700 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-auto">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 text-xs rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold hover:scale-105 transition transform"
                  >
                    Live
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 text-xs rounded-lg border border-slate-700 hover:border-indigo-400 hover:text-indigo-300 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
