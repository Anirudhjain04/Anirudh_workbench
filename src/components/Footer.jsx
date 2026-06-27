import React from "react";
import { Link } from "react-router-dom";

const links = [
  { link: "About", href: "/about" },
  { link: "Work", href: "/work" },
  { link: "Journal", href: "/journal" },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50 border-t border-gray-200 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-12">
            <div>
              <h3 className="text-xl font-semibold">
                <Link 
                to="/"
                className="hover:text-gray-600 transition-colors"
                >AW. Anirudh Workbench</Link>
              </h3>
              <p className="mt-3 text-gray-600">
                Projects, experiments, and notes from my journey building on the
                web.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="hover:text-gray-500 transition-colors"
                  >
                    {link.link}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="https://anirudhjain-portfolio.vercel.app/"
                  target="_blank"
                  className="hover:text-gray-500 transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="https://www.linkedin.com/in/anirudh-jain-aj/"
                  target="_blank"
                  className="hover:text-gray-500 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Anirudhjain04/"
                  target="_blank"
                  className="hover:text-gray-500 transition-colors"
                >
                  Github
                </a>
                <a
                  href="mailto:jainanirudh04@gmail.com"
                  target="_blank"
                  className="hover:text-gray-500 transition-colors"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="border-t mt-10 pt-6">
            <p classname="text-sm text-gray-500">
              © {new Date().getFullYear()} AW. Anirudh Workbench.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
