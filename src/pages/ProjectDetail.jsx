import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  const {
    title,
    description,
    stack,
    image,
    github,
    live,
    overview,
    features,
    challenges,
  } = project;

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition"
        >
          ← Back to Projects
        </Link>
        <div className="mt-10">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="mt-8 text-xl text-gray-600 max-w-3xl leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Live Demo →
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition"
            >
              GitHub →
            </a>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-200"></div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        
          <h2 className="text-3xl font-bold">Project Preview</h2>
          <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100">
            {image ? (
              <img src={image} alt={title} className="w-full object-cover" />
            ) : (
              <div className="h-125 flex items-center justify-center text-gray-400">
                Project Preview
              </div>
            )}
          </div>
        
      </section>
      {overview && (
        <section className="max-w-5xl mx-auto px-6 py-10">
          <h2 className="text-3xl font-bold border-b-2 border-black inline-block pb-2">
            Overview
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {overview}
          </p>
        </section>
      )}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold border-b-2 border-black inline-block pb-2">
          Key Features
        </h2>
        <div className="mt-8 border border-gray-200 rounded-xl p-6 bg-gray-50">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-4">
              <span className="text-xl">✓</span>
              <p className="text-lg text-gray-600 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold border-b-2 border-black inline-block pb-2">
          Challenges & Solutions
        </h2>
        <div className="mt-10 space-y-5">
          {challenges.map((challenge, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-black">Problem</h3>
              <p className="mt-2 text-gray-600">
                {challenge.problem}
              </p>
              <h3 className="font-semibold text-black mt-6">Solution</h3>
              <p className="mt-2 text-gray-600">
                {challenge.solution}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold">
                Explore the project
            </h2>
            <p className="mt-4 text-lg text-gray-600">
                View the live application or browse the source code...
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
                >
                    Live Demo →
                </a>
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition"
                >
                    GitHub Repository →
                </a>
            </div>
            <Link
                to="/work"
                className="inline-block mt-8 text-gray-600 hover:text-black transition"
            >
                ← Back to All Projects
            </Link>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;
