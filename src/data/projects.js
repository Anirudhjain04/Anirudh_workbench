export const projects = [
  {
    id: 1,
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my projects, technical skills, and frontend development journey using React and Tailwind CSS.",
    stack: ["React", "Vite", "Tailwind"],
    image: "/images/portfolio_screenshot.png",
    github: "https://github.com/Anirudhjain04/anirudh-portfolio",
    live: "https://anirudhjain-portfolio.vercel.app/",
    overview:
      "This project was built as a personal portfolio to showcase my frontend development skills, projects, and learning journey. The main focus was to create a clean, responsive, and user-friendly interface using React and Tailwind CSS while keeping the codebase modular and reusable.",
    features: [
      "Responsive design for all devices",
      "Built with React and Tailwind CSS",
      "React Router based navigation",
      "Reusable UI components",
      "Modern and clean interface",
    ],
    challenges: [
      {
        problem: "Multiple pages had repeated UI code.",
        solution:
          "Created reusable React components like Navbar, Footer and ProjectCard.",
      },
      {
        problem: "Routing became difficult as the project grew.",
        solution: "Implemented nested routes with a shared MainLayout.",
      },
      {
        problem: "Layout looked inconsistent on different screen sizes.",
        solution:
          "Used Tailwind CSS responsive utilities for a consistent experience.",
      },
    ],
  },
  {
    id: 2,
    slug: "crypto-price-app",
    title: "Crypto Price App",
    description:
      "Developed a cryptocurrency price tracker using React.js and REST APIs. Implemented real-time price fetching for Bitcoin and Ethereum with state management and dynamic UI updates.",
    stack: ["React", "API", "CSS"],
    image: "/images/Crypto_Price_App.png",
    github: "https://github.com/Anirudhjain04/crypto-price-app",
    live: "https://crypto-price-app.vercel.app/",
    overview:
      "The Crypto Price App is a React-based web application that provides real-time cryptocurrency prices using a public REST API. The project focuses on fetching live market data, displaying it in a clean and responsive interface, and managing application state efficiently. It was built to strengthen my understanding of API integration, asynchronous JavaScript, and dynamic UI rendering.",
    features: [
      "Real-time cryptocurrency price tracking",
      "REST API integration for live market data",
      "Responsive interface for mobile and desktop",
      "Dynamic UI updates without page reloads",
      "Clean and user-friendly design",
    ],
    challenges: [
      {
        problem:
          "Fetching live cryptocurrency data asynchronously while keeping the UI responsive.",

        solution:
          "Implemented asynchronous API requests using fetch() with loading and error states to provide a smooth user experience.",
      },

      {
        problem:
          "Displaying frequently changing market data without making the interface feel cluttered.",

        solution:
          "Organized the data into reusable UI components with clear typography and consistent spacing for better readability.",
      },

      {
        problem: "Handling API failures and network errors gracefully.",

        solution:
          "Added proper error handling and fallback messages so users always receive meaningful feedback instead of a blank screen.",
      },

      {
        problem: "Maintaining responsiveness across different screen sizes.",

        solution:
          "Used Tailwind CSS responsive utilities to ensure the layout adapts seamlessly to mobile, tablet, and desktop devices.",
      },
    ],
  },
  {
    id: 3,
    slug: "anirudh-workbench",
    title: "Anirudh Workbench",
    description: "A personal development hub featuring projects, technical journals, and experiments built throughout my frontend development journey.",
    stack: ["React", "Vite", "Tailwind"],
    image: "/images/Anirudh_workbench.png",
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio.com",
    overview: `Anirudh Workbench is my personal web development hub where I showcase projects, document my learning journey, and share technical journals. Instead of being just a portfolio, it serves as a central place to organize my work, experiments, and notes while continuously improving it as I learn new technologies. The project focuses on clean design, scalability, and reusable React components, making it easy to expand with future features.`,
    features: [
  "Responsive layout optimized for desktop, tablet, and mobile devices.",
  "Dynamic project pages powered by React Router and slug-based routing.",
  "Journal section for documenting technical notes and learning experiences.",
  "Live search across projects and journals.",
  "Reusable React components for consistent UI and easier maintenance.",
  "Clean and minimal interface built with Tailwind CSS.",
  "Project detail pages with overview, features, challenges, and live links.",
],
    challenges: [
  {
    problem:
      "Managing multiple pages while keeping the application scalable and avoiding repetitive code.",
    solution:
      "Created reusable components and centralized project and journal data into separate data files, allowing pages to be generated dynamically."
  },

  {
    problem:
      "Implementing dynamic routing for project and journal detail pages.",
    solution:
      "Used React Router with slug-based URLs and fetched the correct content dynamically using route parameters."
  },

  {
    problem:
      "Building a search feature that works across both projects and journals.",
    solution:
      "Combined project and journal data into a single searchable array and filtered results in real time based on the user's input."
  },

  {
    problem:
      "Making the website responsive across mobile, tablet, and desktop screens.",
    solution:
      "Used Tailwind CSS responsive utilities, redesigned the navigation with a hamburger menu, and adjusted layouts for different screen sizes."
  }
],
  },
];
