function Certifications() {
  const certs = [
    "IBM Full Stack JavaScript Developer",
    "React Certification – Coursera",
    "Step English Certification",
    "X Horizon Hackathon Participation",
  ];

  return (
    <section id="certifications" className="py-28 px-6 flex justify-center bg-slate-900">
      <div className="max-w-6xl w-full">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          My{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-center hover:border-indigo-500/40 transition"
            >
              <p className="text-gray-300 text-sm font-medium">{cert}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;
