import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
  return (
    <>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <h1 className="text-5xl font-bold">My Work</h1>
            <p className="mt-5 text-lg text-gray-600 leading-8">
              A collection of projects I've built while learning, experimenting,
              and solving real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project}  />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
