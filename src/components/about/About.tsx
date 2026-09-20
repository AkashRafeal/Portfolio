import { motion } from "framer-motion";
import { FaJava, FaReact, FaDatabase, FaServer } from "react-icons/fa";

const cards = [
  {
    icon: <FaJava size={30} />,
    title: "Backend Development",
    description: "Spring Boot, Java, REST APIs, JWT Authentication",
  },
  {
    icon: <FaReact size={30} />,
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS, Responsive UI",
  },
  {
    icon: <FaDatabase size={30} />,
    title: "Database",
    description: "MySQL, PostgreSQL, MongoDB",
  },
  {
    icon: <FaServer size={30} />,
    title: "API Development",
    description: "RESTful APIs, Authentication, JSON, CRUD",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#090909] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-orange-500 uppercase tracking-widest"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mt-3"
        >
          Design.
          <span className="text-orange-500"> Code.</span>
          Solve.
          <span className="text-orange-500"> Repeat.</span>
        </motion.h2>

        <p className="mt-8 max-w-3xl text-gray-400 leading-8">
          I'm Akash Rafeal, a passionate Java Full Stack Developer who enjoys
          building modern web applications using Spring Boot, React, TypeScript,
          and MySQL. I love creating scalable applications with clean
          architecture and intuitive user experiences.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -8 }}
              className="bg-[#141414] border border-orange-500/20 rounded-2xl p-8 transition"
            >
              <div className="text-orange-500">{card.icon}</div>

              <h3 className="text-xl font-semibold mt-6">{card.title}</h3>

              <p className="mt-4 text-gray-400 leading-7">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
