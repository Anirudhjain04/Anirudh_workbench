import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-24 min-h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Projects, Experiments & Notes
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Projects, experiments, and notes from my journey building on the
            web.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Explore my work, read development journals, and follow along as I
            learn and build.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/work"
              className="px-5 py-3 bg-black text-white font-medium hover:opacity-90 transition"
            >
              Explore Work
            </Link>
            <Link
              to="/journal"
              className="px-5 py-3 border border-black font-medium hover:bg-black hover:text-white transition"
            >
              View Journal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
