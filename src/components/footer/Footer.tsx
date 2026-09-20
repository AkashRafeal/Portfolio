import { ArrowUp} from "lucide-react";

import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-orange-500">A</span>R
            </h2>

            <p className="text-gray-400 mt-3 max-w-md">
              Java Full Stack Developer passionate about building modern,
              scalable and user-friendly applications.
            </p>
          </div>

          {/* Navigation */}

          <div className="flex flex-wrap gap-6 text-gray-300">
            <a href="/#home" className="hover:text-orange-500">
              Home
            </a>

            <a href="/#about" className="hover:text-orange-500">
              About
            </a>

            <a href="/#skills" className="hover:text-orange-500">
              Skills
            </a>

            <a href="/projects" className="hover:text-orange-500">
              Projects
            </a>

            <a href="/#contact" className="hover:text-orange-500">
              Contact
            </a>
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-orange-500/20 my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 flex items-center gap-2">
            © 2026 Akash Rafeal J.  All rights reserved.
          </p>

          {/* Social Icons */}

          <div className="flex gap-5">
            <a
              href="https://github.com/AkashRafeal"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-[#141414] flex items-center justify-center hover:bg-orange-500 transition"
              title="GitHub Profile"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/akash-rafeal-j"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-[#141414] flex items-center justify-center hover:bg-orange-500 transition"
              title="LinkedIn Profile"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:akashrafeal1290@gmail.com"
              className="w-12 h-12 rounded-xl bg-[#141414] flex items-center justify-center hover:bg-orange-500 transition"
              title="Email Akash"
            >
              <FaEnvelope size={20} />
            </a>

            <a
              href="https://wa.me/917010908812"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-[#141414] flex items-center justify-center hover:bg-orange-500 transition"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>

            {/* Back to Top */}

            <a
              href="#home"
              className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center hover:scale-110 transition"
            >
              <ArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
