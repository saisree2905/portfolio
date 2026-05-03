function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Smarted Innovations",
      description:
        "Worked on full-stack web development using React, Node.js, and MySQL. Built RESTful APIs, improved UI responsiveness, and contributed to scalable backend services.",
    },
    {
      role: "Java Developer Intern",
      company: "CodeAlpha",
      description:
        "Completed a 30-day internship focused on Java and OOP principles. Developed modular applications including a Student Grade Tracker and Hotel Reservation System.",
    },
  ];

  return (
    <section id="experience" className="py-28 px-6 flex justify-center bg-slate-950">
      <div className="max-w-5xl w-full">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          Work{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="relative border-l border-slate-700 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-6 relative">
              
              {/* Dot */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-indigo-500 rounded-full ring-8 ring-slate-950"></span>

              {/* Card */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/40 transition">
                <h3 className="text-lg font-semibold text-indigo-300 mb-1">
                  {exp.role}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{exp.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
