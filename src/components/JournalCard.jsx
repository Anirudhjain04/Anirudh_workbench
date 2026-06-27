import React from "react";
import { journals } from "../data/journals";
import { Link } from "react-router-dom";

const JournalCard = ({ title, slug, excerpt, date, tags }) => {
  return (
    <>
    <Link to={`/journal/${slug}`}>
      <div className="group bg-white border border-gray-200 rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md">
        <h3 className="text-2xl font-semibold group-hover:text-gray-700 transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="mt-3 text-gray-600 line-clamp-3">{excerpt}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-gray-100 border border-gray-200 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-auto pt-6 text-sm text-gray-500">{date}</p>
      </div>
      </Link>
    </>
  );
};

export default JournalCard;
