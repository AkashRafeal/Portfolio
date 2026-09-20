import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-orange-500">A</span>R
            </h2>
            <p className="text-gray-400 mt-2 max-w-md text-sm">
              Java Full Stack Developer passionate about building modern,
              scalable and user-friendly applications.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-5 text-gray-300 text-sm">
            <a href="/#home" className="hover:text-orange-500 transition">
              Home
            </a>
            <a href="/#about" className="hover:text-orange-500 transition">
              About
            </a>
            <a href="/#skills" className="hover:text-orange-500 transition">
              Skills
            </a>
            <a href="/projects" className="hover:text-orange-500 transition">
              Projects
            </a>
            <a href="/#contact" className="hover:text-orange-500 transition">
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-500/20 my-6 md:my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2026 Akash Rafeal J. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3.5 items-center">
            <a
              href="https://github.com/AkashRafeal"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-[#141414] flex items-center justify-center hover:bg-orange-500 text-white transition"
              title="GitHub Profile"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/akash-rafeal-j"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-[#141414] flex items-center justify-center hover:bg-orange-500 text-white transition"
              title="LinkedIn Profile"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="mailto:akashrafeal1290@gmail.com"
              className="w-10 h-10 rounded-xl bg-[#141414] flex items-center justify-center hover:bg-orange-500 text-white transition"
              title="Email Akash"
            >
              <FaEnvelope size={18} />
            </a>

            <a
              href="https://wa.me/917010908812"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-[#141414] flex items-center justify-center hover:bg-orange-500 text-white transition"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>

            {/* Back to Top */}
            <a
              href="#home"
              className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center hover:scale-110 text-white transition ml-2"
              title="Back to Top"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
