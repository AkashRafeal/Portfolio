import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech - Information Technology",
    institute: "Alpha College of Engineering",
    university: "Anna University",
    duration: "2022 - 2026",
    score: "CGPA: 8.16",
  },
  {
    degree: "Higher Secondary (12th)",
    institute: "St. Joseph's Higher Secondary School",
    university: "State Board",
    duration: "2021 - 2022",
    score: "Completed",
  },
  {
    degree: "Secondary School (10th)",
    institute: "St. Aloysious Higher Secondary School",
    university: "State Board",
    duration: "2019 - 2020",
    score: "Completed",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-orange-500 uppercase tracking-widest">Education</p>

        <h2 className="text-5xl font-bold mt-2">Academic Journey</h2>

        <div className="relative mt-16">
          {/* Timeline */}
          <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-orange-500/30"></div>

          {education.map((item, index) => (
            <div key={index} className="relative pl-20 mb-16">
              {/* Timeline Icon */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <GraduationCap size={20} />
              </div>

              <div className="bg-[#141414] border border-orange-500/20 rounded-2xl p-8 hover:border-orange-500 transition">
                <span className="text-orange-500">{item.duration}</span>

                <h3 className="text-2xl font-bold mt-2">{item.degree}</h3>

                <h4 className="text-lg text-gray-400 mt-1">{item.institute}</h4>

                <p className="text-gray-500 mt-2">{item.university}</p>

                <p className="mt-4 text-orange-400 font-semibold">
                  {item.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
