import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Eye, CheckCircle2, Sparkles, ArrowRight, X } from "lucide-react";
import { projectsData, type Project } from "../../data/projectsData";

// Top 3 featured projects for the Home section
const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#0b0b0b] text-white relative">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs tracking-wider uppercase font-semibold">
              <Sparkles size={14} />
              Featured Work
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 tracking-tight">
              Selected <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-gray-400 mt-3 text-lg max-w-2xl">
              A curated selection of key applications I've built, spanning AI pricing models,
              modern full-stack web platforms, and e-commerce stores.
            </p>
          </div>

          {/* Link to Full Projects Page */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl text-sm font-semibold transition text-white shadow-lg shadow-orange-500/20 shrink-0 self-start md:self-auto"
          >
            <span>View All Projects ({projectsData.length})</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#141414] rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500/80 transition-all duration-300 flex flex-col hover:shadow-xl hover:shadow-orange-500/10"
            >
              {/* Project Image Banner */}
              <div className="h-56 w-full relative overflow-hidden bg-zinc-900 border-b border-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-black/60 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/80 backdrop-blur-md border border-white/15 text-orange-300 shadow-md">
                    {project.category}
                  </span>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {project.liveStatus}
                  </span>
                </div>

                {/* Featured Tag */}
                <div className="absolute bottom-3 right-3 z-10">
                  <span className="text-xs bg-orange-500 text-white px-2.5 py-1 rounded-md font-semibold shadow-md">
                    Featured
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-orange-400/90 text-xs font-medium mt-1">
                    {project.subtitle}
                  </p>

                  <p className="text-gray-400 mt-4 text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#1d1d1d] text-gray-300 text-xs border border-zinc-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-orange-500/10 text-orange-400 text-xs font-medium">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-[#1d1d1d] hover:bg-orange-500 text-gray-300 hover:text-white transition flex items-center gap-2 text-xs font-medium"
                        title="View Source Code on GitHub"
                      >
                        <FaGithub size={16} />
                        <span>Code</span>
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white border border-orange-500/30 hover:border-orange-500 transition flex items-center gap-2 text-xs font-semibold"
                        title="Open Live Preview"
                      >
                        <FaExternalLinkAlt size={12} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs text-gray-400 hover:text-orange-400 flex items-center gap-1.5 transition py-1"
                  >
                    <Eye size={14} />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#141414] via-[#1a1412] to-[#141414] border border-orange-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white">
              Want to see all {projectsData.length} projects?
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              Explore distributed microservices, CRM systems, social media apps, and academic tools in the complete archive.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#202020] hover:bg-orange-500 border border-zinc-700 hover:border-orange-500 text-white font-semibold text-sm transition shrink-0"
          >
            <span>Explore All Projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#141414] border border-orange-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white"
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-800/80 hover:bg-orange-500 text-gray-400 hover:text-white transition z-20"
              >
                <X size={20} />
              </button>

              {/* Modal Image Preview */}
              <div className="w-full h-56 rounded-2xl overflow-hidden border border-zinc-800 mb-6 bg-zinc-900">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  {activeModalProject.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {activeModalProject.liveStatus}
                </span>
              </div>

              <h2 className="text-3xl font-extrabold mt-4">
                {activeModalProject.title}
              </h2>
              <p className="text-orange-400 font-medium text-sm mt-1">
                {activeModalProject.subtitle}
              </p>

              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Overview
                </h4>
                <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Key Technical Architecture & Highlights
                </h4>
                <div className="space-y-2.5">
                  {activeModalProject.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-orange-400 shrink-0 mt-0.5"
                      />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-[#202020] text-gray-200 text-xs border border-zinc-700 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t border-zinc-800">
                {activeModalProject.demo && (
                  <a
                    href={activeModalProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[160px] py-3 px-5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>Open Live Demo</span>
                  </a>
                )}

                {activeModalProject.github && (
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[160px] py-3 px-5 rounded-xl bg-[#202020] hover:bg-zinc-800 border border-zinc-700 hover:border-orange-500/50 text-gray-200 font-semibold text-sm transition flex items-center justify-center gap-2"
                  >
                    <FaGithub size={18} />
                    <span>View GitHub Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
