import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              M Saisree
            </span>
          </h1>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Full Stack Developer passionate about building scalable web
            applications and solving real-world problems using modern
            technologies. I enjoy working across frontend, backend, and
            intelligent systems.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-blue-500 font-semibold hover:scale-105 transition transform"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-lg border border-indigo-400 text-indigo-300 hover:bg-indigo-500/10 transition"
            >
              Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl text-gray-400">
            <a href="https://github.com/saisree2905" target="_blank" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/saisree-mallesh-693334356" target="_blank" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/c.s.gouthamreddy_18?igsh=MTFrZ3ZkNXk0aWFoYw==" target="_blank" className="hover:text-pink-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE VISUAL */}
<div className="flex justify-center md:justify-end">
  <div className="w-72 h-72 rounded-2xl overflow-hidden border border-indigo-500/20 shadow-lg">
    <img
      src="/profile.jpg"
      alt="Saisree"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      </div>
    </section>
  );
}

export default Hero;
