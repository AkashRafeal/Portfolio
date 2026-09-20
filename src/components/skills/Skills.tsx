import { FaJava, FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava size={45} />, color: "text-orange-500" },
  {
    name: "Spring Boot",
    icon: <SiSpringboot size={45} />,
    color: "text-green-500",
  },
  { name: "React", icon: <FaReact size={45} />, color: "text-cyan-400" },
  {
    name: "TypeScript",
    icon: <SiTypescript size={45} />,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={45} />,
    color: "text-yellow-400",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={45} />,
    color: "text-cyan-300",
  },
  { name: "HTML5", icon: <FaHtml5 size={45} />, color: "text-orange-600" },
  { name: "CSS3", icon: <FaCss3Alt size={45} />, color: "text-blue-400" },
  { name: "MySQL", icon: <SiMysql size={45} />, color: "text-blue-500" },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={45} />,
    color: "text-sky-500",
  },
  { name: "MongoDB", icon: <SiMongodb size={45} />, color: "text-green-500" },
  { name: "Git", icon: <FaGitAlt size={45} />, color: "text-orange-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 bg-[#090909] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-orange-500 uppercase tracking-widest">
          My Tech Stack
        </p>

        <h2 className="text-5xl font-bold mt-3">Technologies I Use</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                bg-[#141414]
                border
                border-orange-500/20
                rounded-2xl
                p-8
                text-center
                hover:border-orange-500
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className={`${skill.color} flex justify-center`}>
                {skill.icon}
              </div>

              <h3 className="mt-5 font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
