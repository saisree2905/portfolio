function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Spring Boot", "PHP"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Core CS",
      skills: ["Data Structures", "OOP"],
    },
    {
      title: "Tools",
      skills: ["VS Code", "Git", "GitHub", "Postman"],
    },
  ];

  return (
    <section id="skills" className="py-28 px-6 flex justify-center bg-slate-950">
      <div className="max-w-6xl w-full">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          My{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/40 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-slate-800 text-gray-300 border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
