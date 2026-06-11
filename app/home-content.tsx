"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "./providers";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  details: string[];
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Medicine365 Web",
    description: "Full-stack medicine delivery platform with order management system",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    details: [
      "Built complete MERN stack application",
      "Real-time product catalogue and order tracking",
      "Automated order lifecycle management",
      "MongoDB schemas for structured data",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Cheezy Now",
    description: "Cross-platform food delivery app for iOS and Android",
    tech: ["React Native", "REST APIs", "State Management", "iOS", "Android"],
    details: [
      "Cross-platform app deployed on iOS and Android",
      "Real-time restaurant listings and menus",
      "Live order tracking system",
      "Smooth navigation and state management",
    ],
    color: "from-orange-500 to-pink-500",
  },
  {
    id: 3,
    title: "Pet Accessories Store",
    description: "E-commerce platform with dynamic product listings and checkout",
    tech: ["React.js", "MySQL", "REST APIs", "Payment Integration"],
    details: [
      "Full e-commerce platform with filtering",
      "Reusable React components",
      "Integrated payment systems",
      "Streamlined checkout flow",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "Mobile weather app with daily and weekly forecasts",
    tech: ["React Native", "Third-party APIs", "Data Parsing"],
    details: [
      "Real-time weather data integration",
      "Daily and weekly forecast displays",
      "Clean, intuitive interface",
      "Structured API data parsing",
    ],
    color: "from-sky-400 to-blue-500",
  },
];

const skills = [
  { category: "Frontend", items: ["React.js", "React Native", "Next.js", "HTML5", "CSS3"] },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Routing"] },
  { category: "Databases", items: ["MongoDB", "MySQL", "Data Modeling"] },
  { category: "Tools", items: ["Git", "GitHub", "Agile", "Testing", "Debugging"] },
];

export function HomeContent() {
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const isDark = theme === "dark";

  return (
    <div className="relative w-full overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full border-b ${isDark ? "border-[#30363d] bg-[#0f1117]/80" : "border-gray-200 bg-white/80"} backdrop-blur-sm transition-colors duration-300`}>
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <motion.h2
            className={`text-xl font-bold ${isDark ? "text-[#00d9ff]" : "text-cyan-600"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            MQ
          </motion.h2>
          <div className="flex gap-8 items-center">
            <a href="#projects" className={`text-sm ${isDark ? "text-[#8b949e] hover:text-[#00d9ff]" : "text-gray-600 hover:text-cyan-600"} transition`}>
              Projects
            </a>
            <a href="#skills" className={`text-sm ${isDark ? "text-[#8b949e] hover:text-[#00d9ff]" : "text-gray-600 hover:text-cyan-600"} transition`}>
              Skills
            </a>
            <a href="#resume" className={`text-sm ${isDark ? "text-[#8b949e] hover:text-[#00d9ff]" : "text-gray-600 hover:text-cyan-600"} transition`}>
              Resume
            </a>
            <a href="#contact" className={`text-sm ${isDark ? "text-[#8b949e] hover:text-[#00d9ff]" : "text-gray-600 hover:text-cyan-600"} transition`}>
              Contact
            </a>
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`min-h-screen flex items-center justify-center pt-20 px-6 ${isDark ? "bg-[#0f1117]" : "bg-white"} transition-colors duration-300`}>
        <motion.div
          className="max-w-4xl w-full text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <div className={`inline-block px-4 py-2 border ${isDark ? "border-[#30363d] text-[#8b949e]" : "border-gray-300 text-gray-600"} rounded-full text-sm mb-6`}>
              👋 Welcome to my portfolio
            </div>
            <h1 className={`heading-xl max-w-3xl mx-auto ${isDark ? "text-white" : "text-gray-900"}`}>
              Full Stack Developer &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                Recent MSc Graduate
              </span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto leading-relaxed ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}
          >
            I build full-stack web and mobile applications using React, React Native, and Node.js. Specialized in MERN stack development with a focus on clean code, user experience, and scalable architecture.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-cyan-500 dark:bg-cyan-500 text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-cyan-600 dark:hover:bg-cyan-400 transition"
            >
              View My Work
            </a>
            <a
              href="mailto:mudassarqayyumuk@gmail.com"
              className={`px-8 py-3 border rounded-lg font-semibold transition ${isDark ? "border-[#30363d] text-[#e6edf3] hover:bg-[#161b22]" : "border-gray-300 text-gray-900 hover:bg-gray-100"}`}
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className={`pt-8 text-sm ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}>
            📍 Manchester, UK | Available for junior roles & internships
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-32 px-6 ${isDark ? "bg-[#161b22]/30" : "bg-gray-50"} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className={`heading-lg mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Featured Projects</h2>
            <div className={`w-16 h-1 bg-gradient-to-r ${isDark ? "from-[#00d9ff]" : "from-cyan-500"} to-transparent`}></div>
            <p className={`mt-4 text-lg ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}>
              5 end-to-end projects showcasing full-stack development across web and mobile platforms
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-xl border p-8 transition ${isDark ? "bg-gradient-to-br from-[#161b22] to-[#0f1117] border-[#30363d] hover:border-[#00d9ff]/30" : "bg-white border-gray-200 hover:border-cyan-500/30"}`}
              >
                {/* Gradient accent */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${project.color} transition duration-500`}></div>

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} mb-6 opacity-80 group-hover:opacity-100 transition`}></div>

                  <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>{project.title}</h3>
                  <p className={`mb-6 leading-relaxed ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}>{project.description}</p>

                  <ul className="space-y-2 mb-6">
                    {project.details.map((detail, i) => (
                      <li key={i} className={`text-sm flex items-start gap-3 ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}>
                        <span className={`mt-1 ${isDark ? "text-[#00d9ff]" : "text-cyan-500"}`}>→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs rounded-full transition ${isDark ? "bg-[#0f1117] border border-[#30363d] text-[#8b949e] group-hover:border-[#00d9ff]/50" : "bg-gray-100 border border-gray-200 text-gray-600 group-hover:border-cyan-500/50"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-32 px-6 ${isDark ? "bg-[#0f1117]" : "bg-white"} transition-colors duration-300`}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className={`heading-lg mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Technical Skills</h2>
            <div className={`w-16 h-1 bg-gradient-to-r ${isDark ? "from-[#00d9ff]" : "from-cyan-500"} to-transparent`}></div>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="space-y-4"
              >
                <h3 className={`text-lg font-semibold ${isDark ? "text-[#00d9ff]" : "text-cyan-600"}`}>{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className={`flex items-center gap-3 group cursor-default ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}
                    >
                      <span className={`w-2 h-2 rounded-full group-hover:w-3 group-hover:h-3 transition ${isDark ? "bg-[#00d9ff]" : "bg-cyan-500"}`}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className={`py-32 px-6 ${isDark ? "bg-[#161b22]/30" : "bg-gray-50"} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className={`heading-lg mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Resume / CV</h2>
            <div className={`w-16 h-1 bg-gradient-to-r ${isDark ? "from-[#00d9ff]" : "from-cyan-500"} to-transparent`}></div>
            <p className={`mt-4 text-lg ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}>
              Download my CV to see my full educational background, experience, and technical qualifications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`rounded-xl border p-12 text-center ${isDark ? "bg-gradient-to-br from-[#161b22] to-[#0f1117] border-[#30363d]" : "bg-white border-gray-200"}`}
          >
            <div className={`flex justify-center mb-6 text-6xl`}>
              📄
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Mudassar Qayyum — Full Stack Developer
            </h3>
            <p className={`mb-8 text-lg ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}>
              MSc Software Engineering | MERN Stack | React Native | Mobile & Web Development
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/api/download-resume"
                className="px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition"
              >
                ⬇️ Download CV
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-3 border rounded-lg font-semibold transition ${isDark ? "border-[#30363d] text-[#e6edf3] hover:bg-[#161b22]" : "border-gray-300 text-gray-900 hover:bg-gray-100"}`}
              >
                👁️ View in Browser
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-32 px-6 ${isDark ? "bg-[#161b22]/30" : "bg-gray-50"} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className={`heading-lg mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>About Me</h2>
              <div className={`w-16 h-1 bg-gradient-to-r ${isDark ? "from-[#00d9ff]" : "from-cyan-500"} to-transparent mb-6`}></div>
            </div>

            <div className={`space-y-6 text-lg leading-relaxed ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}>
              <p>
                I'm a full-stack developer with an MSc in Software Engineering from the University of Greater Manchester. I have a strong foundation in JavaScript, React, and Node.js, having built 5 production-ready applications across web and mobile platforms.
              </p>
              <p>
                My experience spans e-commerce platforms, healthcare delivery systems, and mobile applications. I'm passionate about writing clean, maintainable code and creating user experiences that feel intuitive and delightful.
              </p>
              <p>
                Currently based in Manchester with a valid UK visa (until October 2027), I'm actively seeking junior developer roles or internships where I can contribute to impactful projects and continue growing as an engineer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className={`font-semibold text-2xl ${isDark ? "text-[#00d9ff]" : "text-cyan-600"}`}>5+</p>
                <p className={isDark ? "text-[#8b949e]" : "text-gray-600"}>Complete Projects</p>
              </div>
              <div>
                <p className={`font-semibold text-2xl ${isDark ? "text-[#00d9ff]" : "text-cyan-600"}`}>2+</p>
                <p className={isDark ? "text-[#8b949e]" : "text-gray-600"}>Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-32 px-6 ${isDark ? "bg-[#0f1117]" : "bg-white"} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className={`heading-lg ${isDark ? "text-white" : "text-gray-900"}`}>Let's Work Together</h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-[#8b949e]" : "text-gray-600"}`}>
              I'm actively looking for junior developer roles and internships. Feel free to reach out if you'd like to discuss opportunities or just want to say hello.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:mudassarqayyumuk@gmail.com"
                className="px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition"
              >
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/mudassarqayyum"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-3 border rounded-lg font-semibold transition ${isDark ? "border-[#30363d] text-[#e6edf3] hover:bg-[#161b22]" : "border-gray-300 text-gray-900 hover:bg-gray-100"}`}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Mudassarqayyum"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-3 border rounded-lg font-semibold transition ${isDark ? "border-[#30363d] text-[#e6edf3] hover:bg-[#161b22]" : "border-gray-300 text-gray-900 hover:bg-gray-100"}`}
              >
                GitHub
              </a>
            </div>
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
