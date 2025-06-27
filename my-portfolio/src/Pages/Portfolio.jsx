import { useEffect, useState } from 'react';
import { FaAddressCard } from 'react-icons/fa';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
  fetch('https://api.github.com/users/neeraj5415/repos')
    .then((res) => res.json())
    .then((data) => {
      console.log('GitHub API data:', data);
      setProjects(data);  // ← no filter!
    })
    .catch((error) => console.error('Error fetching repos:', error));
}, []);

  return (
    <section id="portfolio" className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          <FaAddressCard className="inline-block mr-2 text-gray-700" />
          Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length === 0 ? (
            <p className="text-center col-span-full">Loading projects...</p>
          ) : (
            projects.map((project) => (
              <a
                key={project.id}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg shadow-md overflow-hidden bg-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-green-600 h-48 flex items-center justify-center text-white text-2xl font-bold">
                  {project.name}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-700 text-sm">
                    {project.description}
                  </p>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;