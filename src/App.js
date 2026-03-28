import React from "react";

export default function Portfolio() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 shadow-md bg-white sticky top-0">
        <h1 className="font-bold text-xl">Anunaya</h1>
        <div className="space-x-4">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Anunaya 👋</h1>
        <p className="text-lg">Front-End Developer | React | UI/UX Enthusiast</p>
        <div className="mt-6 space-x-4">
          <a href="#projects" className="bg-white text-blue-600 px-4 py-2 rounded-xl">View Projects</a>
          <a href="https://github.com/Anunaya333" target="_blank" className="border px-4 py-2 rounded-xl">GitHub</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          Computer Science Engineering student skilled in building responsive web applications using React and JavaScript. Developed full-stack projects with REST APIs and passionate about creating modern UI experiences.
        </p>
      </section>

      {/* Skills */}
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Node.js",
            "MongoDB",
            "Django",
            "Git"
          ].map((skill) => (
            <div key={skill} className="bg-gray-100 p-4 rounded-xl text-center shadow">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: "Portfolio Website",
            desc: "Responsive portfolio built using React and modern UI principles."
          },
          {
            title: "Campus Placement Hub",
            desc: "Full-stack system using React, Node.js, MongoDB with REST APIs."
          },
          {
            title: "Hospital Management System",
            desc: "Django-based system for patient and appointment management."
          }].map((project, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition">
              <h3 className="font-bold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.desc}</p>
              <div className="mt-4 space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded">Live</button>
                <button className="border px-3 py-1 rounded">Code</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-8 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: anunayachinthapalli@email.com</p>
        <p>GitHub: https://github.com/Anunaya333</p>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 bg-white text-gray-500">
        © 2026 Anunaya. All rights reserved.
      </footer>
    </div>
  );
}

