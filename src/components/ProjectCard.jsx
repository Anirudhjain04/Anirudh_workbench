import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { title, slug, description, stack, image, github, live } = project;

  return (
    <div className=" group bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl hover:border-black">
      <Link to={`/work/${slug}`}>
        <div className="h-56 overflow-hidden bg-gray-100 flex items-center justify-center">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />
          ) : (
            <span className="text-gray-500 font-medium">Project Preview</span>
          )}
        </div>
      </Link>

      <div className="p-6 flex flex-col">
        <Link
          to={`/work/${slug}`}
          className="text-xl font-semibold hover:underline underline-offset-4 inline-block"
        >
          {title}
        </Link>

        <p className="mt-3 text-gray-600 h-30">{description}</p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mt-4">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-gray-100 border border-gray-200 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded-lg font-medium"
            >
              Live Demo →
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border rounded-lg"
            >
              GitHub →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
