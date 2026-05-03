function About() {
  return (
    <section id="about" className="py-28 px-6 flex justify-center bg-slate-950">
      <div className="max-w-5xl w-full bg-slate-900/70 border border-slate-800 rounded-2xl p-10 md:p-14 shadow-lg">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
          About{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          I am a Computer Science student and Full Stack Developer with strong
          foundations in Java, Python, and modern web technologies. I enjoy
          building responsive user interfaces, designing scalable backend
          systems, and exploring intelligent solutions to solve real-world
          problems.
        </p>

        <p className="text-gray-400 leading-relaxed text-base">
          My interests span across full stack development, software engineering,
          and machine learning. I am passionate about writing clean, maintainable
          code and continuously improving my technical skills through hands-on
          projects and internships.
        </p>

      </div>
    </section>
  );
}

export default About;
