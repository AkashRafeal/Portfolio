import { Mail, Phone, MapPin, Send, Download } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#090909] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-orange-500 uppercase tracking-widest">Contact</p>

        <h2 className="text-5xl font-bold mt-3">Let's Work Together</h2>

        <p className="text-gray-400 mt-5 max-w-2xl">
          I'm currently looking for Java Full Stack Developer opportunities. If
          you have an opportunity or would like to collaborate, feel free to
          contact me.
        </p>

        <div className="grid lg:grid-cols-2 gap-14 mt-16">
          {/* Left Side */}

          <div className="space-y-8">
            <div className="flex items-center gap-5 bg-[#141414] p-6 rounded-2xl border border-orange-500/20">
              <Mail className="text-orange-500" />

              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:akashrafeal1290@gmail.com"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  akashrafeal1290@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-[#141414] p-6 rounded-2xl border border-orange-500/20">
              <Phone className="text-orange-500" />

              <div>
                <h3 className="font-semibold">Phone</h3>
                <a
                  href="tel:+917010908812"
                  className="text-gray-400 hover:text-orange-500 transition"
                >
                  +91 70109 08812
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-[#141414] p-6 rounded-2xl border border-orange-500/20">
              <MapPin className="text-orange-500" />

              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Social Links */}

            <div className="flex gap-5">
              <a
                href="https://github.com/AkashRafeal"
                target="_blank"
                rel="noreferrer"
                className="bg-[#141414] p-4 rounded-xl border border-orange-500/20 hover:border-orange-500"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/akash-rafeal-j"
                target="_blank"
                rel="noreferrer"
                className="bg-[#141414] p-4 rounded-xl border border-orange-500/20 hover:border-orange-500"
              >
                <FaLinkedin size={22} />
              </a>
            </div>

            {/* Resume Button */}

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-3 bg-orange-500 px-6 py-3 rounded-xl hover:bg-orange-600 transition"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Right Side */}

          <div className="bg-[#141414] rounded-2xl p-8 border border-orange-500/20">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#1d1d1d] rounded-xl p-4 outline-none border border-transparent focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#1d1d1d] rounded-xl p-4 outline-none border border-transparent focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#1d1d1d] rounded-xl p-4 outline-none border border-transparent focus:border-orange-500"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full bg-[#1d1d1d] rounded-xl p-4 outline-none border border-transparent focus:border-orange-500"
              />

              <button className="w-full bg-orange-500 py-4 rounded-xl hover:bg-orange-600 transition flex justify-center items-center gap-3">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
