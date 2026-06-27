import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

const FeaturedWork = () => {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Featured Work</h2>

        <p className="mt-4 text-gray-600">
          A selection of projects I've worked on.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/work"
            className="px-6 py-3 border border-black rounded-lg font-medium hover:bg-black hover:text-white transition"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
