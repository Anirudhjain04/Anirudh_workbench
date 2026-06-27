import React from "react";
import profile from "../assets/profile.png";
import { frontend, tools, learning } from "../data/skills";
import { Mail, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold">About Me</h1>
            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              Hi, I'm{" "}
              <span className="font-semibold text-black">Anirudh Jain</span>, a
              frontend developer passionate about building clean, responsive,
              and user-friendly web experiences.
            </p>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              I enjoy learning new technologies, building real-world projects,
              and documenting my journey through technical journals.
            </p>
            <a
              href="https://anirudhjain-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Visit Portfolio →
            </a>
          </div>
          <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
            <img
              src={profile}
              alt="Anirudh Jain"
              className="w-64 sm:w-72 lg:w-80 h-auto rounded-2xl border border-gray-200 shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Tech Stack</h2>
          <p className="mt-4 text-gray-600">
            Technologies and tools I use to build modern web applications.
          </p>

          <div className="mt-10">
            <h3 className="text-lg font-semibold underline decoration-2 underline-offset-4">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-3 mt-5">
              {frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold underline decoration-2 underline-offset-4">
              Tools
            </h3>
            <div className="flex flex-wrap gap-3 mt-5">
              {tools.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-semibold underline decoration-2 underline-offset-4">
              Currently Learning
            </h3>

            <div className="flex flex-wrap gap-3 mt-5">
              {learning.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="mt-4 text-gray-600 max-w-2xl">
          I'm always open to discussing new ideas, collaborating on projects, or
          simply having a conversation about web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-5xl">
          <a
            href="mailto:jainanirudh04@gmail.com"
            className="border border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-lg transition-all"
          >
            <Mail size={24} />
            <h3 className="mt-5 text-xl font-semibold">Email</h3>
            <p className="mt-2 text-gray-600">Send me an email anytime.</p>
          </a>

          <a
            href="https://github.com/Anirudhjain04"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-lg transition-all"
          >
            <FaGithub size={24} />
            <h3 className="mt-5 text-xl font-semibold">GitHub</h3>
            <p className="mt-2 text-gray-600">
              Explore my projects and source code.
            </p>
          </a>

          <a
            href="https://anirudhjain-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
          >
            <Globe size={24} />
            <h3 className="mt-5 text-xl font-semibold">Portfolio</h3>
            <p className="mt-2 text-gray-600">
              Visit my complete portfolio.
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/anirudh-jain-aj/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-lg"
          >
            <FaLinkedin size={24} />
            <h3 className="mt-5 text-xl font-semibold">LinkedIn</h3>
            <p className="mt-2 text-gray-600">
              Let's connect professionally.
            </p>
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
