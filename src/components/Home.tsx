import { projects } from "../assets/projects";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-4 bg-white dark:bg-gray-900">
      {/* Introductory Text */}
      <div className="text-md lg:text-lg text-center mb-4 dark:text-white">
        The following are some of the frontend single-page projects made in React and TypeScript.
      </div>

      {/* Grid of Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project, index) => (
          <Link
            to={project.path}
            key={index}
            className="block p-4 bg-slate-200 dark:bg-slate-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Image Container */}
            <div className="h-[150px] flex justify-center items-center overflow-hidden">
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="object-cover max-h-full max-w-full rounded-md"
              />
            </div>

            {/* Project Name */}
            <div className="mt-4 text-center text-black font-semibold dark:text-gray-300 text-lg">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
