import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Junior Software Developer",
    company: "Global Minds Technology",
    duration: "2026 - Present",
    description:
      "Developing full-stack web applications using Java, Spring Boot, React, TypeScript, REST APIs and MySQL.",
  },
  {
    role: "WordPress Web Developer Intern",
    company: "Getin Technologies",
    duration: "July 2025",
    description:
      "Developed an ElectroMart e-commerce website using WordPress, Elementor and WooCommerce.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#090909] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-orange-500 uppercase tracking-widest">Experience</p>

        <h2 className="text-5xl font-bold mt-2">Work Experience</h2>

        <div className="relative mt-16">
          {/* Timeline */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-orange-500/30"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-20 mb-16">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <Briefcase size={20} />
              </div>

              <div className="bg-[#141414] border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500 transition">
                <span className="text-orange-500">{exp.duration}</span>

                <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>

                <h4 className="text-lg text-gray-400 mt-1">{exp.company}</h4>

                <p className="mt-5 text-gray-400 leading-8">
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
