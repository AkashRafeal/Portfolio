import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#090909] text-white flex items-center pt-20 lg:pt-24 pb-8 lg:pb-12"
    >
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <p className="text-orange-500 text-base md:text-lg font-medium mb-2">Hello, I'm</p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
            Akash <br />
            <span className="text-orange-500">Rafeal J</span>
          </h1>

          <h2 className="mt-3 md:mt-4 text-xl md:text-2xl lg:text-3xl text-gray-300 font-medium">
            Java Full Stack Developer
          </h2>

          <p className="mt-4 md:mt-5 text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
            Passionate Java Full Stack Developer specializing in Spring Boot,
            React, REST APIs, MySQL, and scalable web application development. I
            enjoy building modern applications with clean architecture and
            user-friendly interfaces.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6 md:mt-8">
            <Link
              to="/projects"
              className="bg-orange-500 hover:bg-orange-600 transition px-6 md:px-8 py-3 rounded-lg font-semibold inline-block shadow-lg shadow-orange-500/20"
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              download="2026 Resume Chennai.pdf"
              className="border border-orange-500 hover:bg-orange-500 transition px-6 md:px-8 py-3 rounded-lg font-semibold inline-block"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 md:mt-8 text-2xl">
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

            <a
              href="https://wa.me/917010908812"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center order-1 lg:order-2"
        >
          {/* Orange Glow */}
          <div className="absolute w-[300px] sm:w-[360px] md:w-[420px] h-[300px] sm:h-[360px] md:h-[420px] bg-orange-500 rounded-full blur-[140px] opacity-25 pointer-events-none"></div>

          {/* Image */}
          <div className="relative z-10 w-full max-w-[340px] sm:max-w-[440px] lg:max-w-[530px] flex justify-center items-center">
            <img
              src="/profile.png?v=5"
              alt="Akash Rafeal J"
              className="w-full object-contain drop-shadow-[0_0_50px_rgba(249,115,22,0.18)]"
            />
          </div>

          {/* Top Card */}
          <Link
            to="/projects"
            className="absolute top-2 sm:top-4 lg:top-8 right-0 z-20 bg-[#111111]/90 border border-orange-500/30 hover:border-orange-500 rounded-xl px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4 backdrop-blur-md shadow-xl transition-all duration-300 group cursor-pointer"
            title="View all projects"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500 group-hover:scale-105 transition-transform">10+</h3>
            <p className="text-gray-300 text-[11px] sm:text-xs lg:text-sm">Projects</p>
          </Link>

          {/* Middle Card */}
          <div className="absolute top-1/2 -right-2 sm:-right-4 lg:-right-2 -translate-y-1/2 z-20 bg-[#111111]/90 border border-orange-500/30 rounded-xl px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4 backdrop-blur-md shadow-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500">8.16</h3>
            <p className="text-gray-300 text-[11px] sm:text-xs lg:text-sm">CGPA</p>
          </div>

          {/* Bottom Card */}
          <div className="absolute bottom-2 sm:bottom-4 lg:bottom-8 right-1 sm:right-2 lg:right-4 z-20 bg-[#111111]/90 border border-orange-500/30 rounded-xl px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4 backdrop-blur-md shadow-xl">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500">1+</h3>
            <p className="text-gray-300 text-[11px] sm:text-xs lg:text-sm">Internship</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
