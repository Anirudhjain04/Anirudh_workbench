import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

import { projects } from "../data/projects";
import { journals } from "../data/journals";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const searchData = [
    ...projects.map((project) => ({
      ...project,
      type: "Project",
      path: `/work/${project.slug}`,
    })),

    ...journals.map((journal) => ({
      ...journal,
      type: "Journal",
      path: `/journal/${journal.slug}`,
    })),
  ];

  const filteredResults = searchData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">

        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">

          {/* Logo */}

          <Link
            to="/"
            className="text-xl font-bold border-b-2 border-black/50 pb-1"
          >
            <span className="hidden lg:block">
              AW. Anirudh Workbench
            </span>

            <span className="lg:hidden">
              AW.
            </span>
          </Link>

          {/* Desktop Navigation */}

          <ul className="hidden lg:flex items-center gap-8">

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/work">Work</Link>
            </li>

            <li>
              <Link to="/journal">Journal</Link>
            </li>

          </ul>

          {/* Desktop Search */}

          <div className="hidden lg:block">

            <button
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                setQuery("");
              }}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-black transition"
            >
              <Search size={18} />
              <span>Search</span>
            </button>

          </div>

          {/* Mobile Hamburger */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </nav>

        {/* Mobile Menu */}

        {isMenuOpen && (

          <div className="lg:hidden border-t border-gray-200 bg-white">

            <div className="flex flex-col px-6 py-6 space-y-5">

              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                to="/work"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>

              <Link
                to="/journal"
                onClick={() => setIsMenuOpen(false)}
              >
                Journal
              </Link>

              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2"
              >
                <Search size={18} />
                Search
              </button>

            </div>

          </div>

        )}

        {/* Search Dropdown */}

        {isSearchOpen && (

          <div className="absolute right-6 mt-4 w-[420px] max-w-[90vw] bg-white border border-gray-200 rounded-xl shadow-xl z-50">

            <input
              type="text"
              placeholder="Search projects or journals..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-5 py-4 border-b border-gray-200 outline-none"
            />

            <div className="max-h-80 overflow-y-auto">

              {query.length > 0 ? (

                filteredResults.length > 0 ? (

                  filteredResults.map((item) => (

                    <Link
                      key={`${item.type}-${item.id}`}
                      to={item.path}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setQuery("");
                      }}
                      className="block px-5 py-4 hover:bg-gray-50 transition border-b border-gray-100"
                    >

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="font-medium">
                            {item.title}
                          </p>

                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>

                        </div>

                        <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {item.type}
                        </span>

                      </div>

                    </Link>

                  ))

                ) : (

                  <p className="p-5 text-gray-500">
                    No results found.
                  </p>

                )

              ) : (

                <p className="p-5 text-gray-400">
                  Start typing to search...
                </p>

              )}

            </div>

          </div>

        )}

      </header>
    </>
  );
};

export default Navbar;