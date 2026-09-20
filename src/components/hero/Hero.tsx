import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#090909] text-white flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange-500 text-lg font-medium mb-3">Hello, I'm</p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Akash <br />
            <span className="text-orange-500">Rafeal J</span>
          </h1>

          <h2 className="mt-6 text-2xl md:text-3xl text-gray-300">
            Java Full Stack Developer
          </h2>

          <p className="mt-6 text-gray-400 leading-8 max-w-xl">
            Passionate Java Full Stack Developer specializing in Spring Boot,
            React, REST APIs, MySQL, and scalable web application development. I
            enjoy building modern applications with clean architecture and
            user-friendly interfaces.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-lg font-semibold inline-block"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download="Akash_Rafeal_Resume.pdf"
              className="border border-orange-500 hover:bg-orange-500 transition px-8 py-3 rounded-lg font-semibold inline-block"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-2xl">
            <a
              href="https://github.com/AkashRafeal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
              title="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/akash-rafeal-j"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:akashrafeal1290@gmail.com"
              className="hover:text-orange-500 transition"
              title="Email Akash"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Orange Glow */}
          <div className="absolute w-[420px] h-[420px] bg-orange-500 rounded-full blur-[140px] opacity-25"></div>

          {/* Image */}
          <div className="relative z-10 w-[520px] flex justify-center items-center">
            <img
              src="/profile.png?v=3"
              alt="Akash Rafeal J"
              className="w-full object-contain drop-shadow-[0_0_60px_rgba(249,115,22,0.2)]"
            />
          </div>

          {/* Top Card */}
          <div className="absolute top-10 right-0 z-20 bg-[#111111]/90 border border-orange-500/30 rounded-xl px-5 py-4 backdrop-blur-md">
            <h3 className="text-3xl font-bold text-orange-500">10+</h3>
            <p className="text-gray-300 text-sm">Projects</p>
          </div>

          {/* Middle Card */}
          <div className="absolute top-1/2 -right-6 -translate-y-1/2 z-20 bg-[#111111]/90 border border-orange-500/30 rounded-xl px-5 py-4 backdrop-blur-md">
            <h3 className="text-3xl font-bold text-orange-500">8.16</h3>
            <p className="text-gray-300 text-sm">CGPA</p>
          </div>

          {/* Bottom Card */}
          <div className="absolute bottom-10 right-8 z-20 bg-[#111111]/90 border border-orange-500/30 rounded-xl px-5 py-4 backdrop-blur-md">
            <h3 className="text-3xl font-bold text-orange-500">1+</h3>
            <p className="text-gray-300 text-sm">Internship</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
