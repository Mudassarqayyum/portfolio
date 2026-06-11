"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/app/providers";
import { Project } from "@/app/data/projects";

export default function ProjectDetailClient({ project }: { project: Project }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 z-50 w-full border-b ${isDark ? "border-[#30363d] bg-[#0f1117]/80" : "border-gray-200 bg-white/80"} backdrop-blur-sm transition-colors duration-300`}>
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className={`text-sm font-semibold flex items-center gap-2 ${isDark ? "text-[#00d9ff] hover:text-white" : "text-cyan-600 hover:text-gray-900"} transition`}
          >
            <span>←</span> Back to Portfolio
          </Link>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition`}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.415 0l.707.707a1 1 0 01-1.415 1.415l-.707-.707a1 1 0 010-1.415zm2.828 2.828a1 1 0 011.415 0l.707.707a1 1 0 01-1.415 1.415l-.707-.707a1 1 0 010-1.415zm2.828 2.828a1 1 0 011.415 0l.707.707a1 1 0 01-1.415 1.415l-.707-.707a1 1 0 010-1.415zM10 7a3 3 0 100 6 3 3 0 000-6zm-.22 13.78a1 1 0 011.415 0l.707.707a1 1 0 01-1.415 1.415l-.707-.707a1 1 0 010-1.415zm2.828-2.828a1 1 0 011.415 0l.707.707a1 1 0 01-1.415 1.415l-.707-.707a1 1 0 010-1.415zm2.828-2.828a1 1 0 011.415 0l.707.707a1 1 0 01-1.415 1.415l-.707-.707a1 1 0 010-1.415zM7 10a1 1 0 11-2 0 1 1 0 012 0zm-.22 7.78a1 1 0 011.415 0l.707.707a1 1 0 01-1.415 1.415l-.707-.707a1 1 0 010-1.415zM2.22 9.22a1 1 0 011.415 0l.707.707a1 1 0 01-1.415 1.415l-.707-.707a1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Header Section */}
      <section className={`pt-32 pb-16 px-6 ${isDark ? "bg-[#0f1117]" : "bg-white"} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="flex justify-center">
              <img src={project.logo} alt={project.title} className="w-24 h-24 object-contain" />
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-center">
              <h1 className={`heading-lg ${isDark ? "text-white" : "text-gray-900"}`}>{project.title}</h1>
              <p className={`text-lg ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}>{project.description}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 text-sm rounded-full transition ${isDark ? "bg-[#161b22] border border-[#30363d] text-[#8b949e]" : "bg-gray-100 border border-gray-200 text-gray-600"}`}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Screenshot Gallery Section */}
      <section className={`py-16 px-6 ${isDark ? "bg-[#161b22]/30" : "bg-gray-50"} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className={`heading-md ${isDark ? "text-white" : "text-gray-900"}`}>Screenshots</h2>

            {project.screenshots.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2">
                {project.screenshots.map((screenshot, index) => (
                  <motion.img
                    key={index}
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className={`rounded-lg border ${isDark ? "border-[#30363d]" : "border-gray-200"}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`rounded-lg border-2 border-dashed p-16 text-center ${isDark ? "border-[#30363d] bg-[#0f1117]/50" : "border-gray-300 bg-gray-100/50"}`}
              >
                <p className={`text-lg ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}>Screenshots coming soon</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* About This Project Section */}
      <section className={`py-16 px-6 ${isDark ? "bg-[#0f1117]" : "bg-white"} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className={`heading-md ${isDark ? "text-white" : "text-gray-900"}`}>About This Project</h2>
            <div className="space-y-6">
              {project.longDescription.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-lg leading-relaxed ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className={`py-16 px-6 ${isDark ? "bg-[#161b22]/30" : "bg-gray-50"} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className={`heading-md ${isDark ? "text-white" : "text-gray-900"}`}>Key Features</h2>
            <ul className="space-y-4">
              {project.details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-start gap-4 text-lg ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}
                >
                  <span className={`mt-1 text-2xl flex-shrink-0 ${isDark ? "text-[#00d9ff]" : "text-cyan-500"}`}>
                    →
                  </span>
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-8 px-6 text-center text-sm ${isDark ? "border-[#30363d] text-[#8b949e]" : "border-gray-200 text-gray-600"} transition-colors duration-300`}>
        <p>© 2026 Mudassar Qayyum. All rights reserved.</p>
      </footer>
    </div>
  );
}
