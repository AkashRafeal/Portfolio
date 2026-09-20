import { useState } from "react";
import { Mail, Phone, MapPin, Send, Download, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in your name, email, and message.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "0c92274e-c41b-4cf0-8650-5bf6be657b86";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
          from_name: `${formData.name} (Portfolio Inquiry)`,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent directly to my email. I will get back to you shortly.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Network error. Please try again or reach out directly via Email / WhatsApp.");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-[#090909] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold">Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Let's Work Together</h2>
        <p className="text-gray-400 mt-3 max-w-2xl text-base">
          I'm currently looking for Java Full Stack Developer opportunities. If
          you have an opportunity or would like to collaborate, feel free to
          contact me.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-10">
          {/* Left Side */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-[#141414] p-5 rounded-2xl border border-orange-500/20">
              <Mail className="text-orange-500 shrink-0" size={22} />
              <div>
                <h3 className="font-semibold text-sm">Email</h3>
                <a
                  href="mailto:akashrafeal1290@gmail.com"
                  className="text-gray-400 hover:text-orange-500 transition text-sm"
                >
                  akashrafeal1290@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#141414] p-5 rounded-2xl border border-orange-500/20">
              <Phone className="text-orange-500 shrink-0" size={22} />
              <div>
                <h3 className="font-semibold text-sm">Phone</h3>
                <a
                  href="tel:+917010908812"
                  className="text-gray-400 hover:text-orange-500 transition text-sm"
                >
                  +91 70109 08812
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#141414] p-5 rounded-2xl border border-orange-500/20">
              <MapPin className="text-orange-500 shrink-0" size={22} />
              <div>
                <h3 className="font-semibold text-sm">Location</h3>
                <p className="text-gray-400 text-sm">Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://github.com/AkashRafeal"
                target="_blank"
                rel="noreferrer"
                className="bg-[#141414] p-3.5 rounded-xl border border-orange-500/20 hover:border-orange-500 hover:text-orange-500 transition"
                title="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/akash-rafeal-j"
                target="_blank"
                rel="noreferrer"
                className="bg-[#141414] p-3.5 rounded-xl border border-orange-500/20 hover:border-orange-500 hover:text-orange-500 transition"
                title="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:akashrafeal1290@gmail.com"
                className="bg-[#141414] p-3.5 rounded-xl border border-orange-500/20 hover:border-orange-500 hover:text-orange-500 transition"
                title="Send Email"
              >
                <FaEnvelope size={20} />
              </a>

              <a
                href="https://wa.me/917010908812"
                target="_blank"
                rel="noreferrer"
                className="bg-[#141414] p-3.5 rounded-xl border border-orange-500/20 hover:border-orange-500 hover:text-orange-500 transition"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>

            {/* Resume Button */}
            <div className="pt-2">
              <a
                href="/resume.pdf"
                download="2026 Resume Chennai.pdf"
                className="inline-flex items-center gap-2.5 bg-orange-500 px-6 py-3 rounded-xl hover:bg-orange-600 transition font-medium text-sm text-white shadow-lg shadow-orange-500/20"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-[#141414] rounded-2xl p-6 md:p-8 border border-orange-500/20">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#1d1d1d] rounded-xl p-3.5 outline-none border border-transparent focus:border-orange-500 text-white placeholder-gray-500 transition text-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full bg-[#1d1d1d] rounded-xl p-3.5 outline-none border border-transparent focus:border-orange-500 text-white placeholder-gray-500 transition text-sm"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-[#1d1d1d] rounded-xl p-3.5 outline-none border border-transparent focus:border-orange-500 text-white placeholder-gray-500 transition text-sm"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full bg-[#1d1d1d] rounded-xl p-3.5 outline-none border border-transparent focus:border-orange-500 text-white placeholder-gray-500 transition resize-none text-sm"
                />
              </div>

              {/* Status Alert Banner */}
              {status === "success" && (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-start gap-2.5">
                  <CheckCircle2 className="shrink-0 mt-0.5" size={16} />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-start gap-2.5">
                  <AlertCircle className="shrink-0 mt-0.5" size={16} />
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-orange-500 py-3.5 rounded-xl hover:bg-orange-600 transition flex justify-center items-center gap-2.5 font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-orange-500/20 text-sm"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
