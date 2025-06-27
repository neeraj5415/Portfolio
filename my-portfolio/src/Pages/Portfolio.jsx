import { FaAddressCard } from 'react-icons/fa';
import project1 from '../assets/react.svg';
import project2 from '../assets/react.svg';
import project3 from '../assets/react.svg';
import project4 from '../assets/react.svg';
import project5 from '../assets/react.svg';
import project6 from '../assets/react.svg';

const projects = [
  {
    image: project1,
    title: 'CodeZen Platform',
    description: 'A learning portal for coding challenges and video lectures.',
  },
  {
    image: project2,
    title: 'Web Design Project',
    description: 'Modern responsive website built with HTML5, CSS3, and JS.',
  },
  {
    image: project3,
    title: 'Portfolio Website',
    description: 'A personal portfolio built using React and Tailwind CSS.',
  },
  {
    image: project4,
    title: 'Dashboard UI',
    description: 'Interactive admin dashboard using Chart.js and APIs.',
  },
  {
    image: project5,
    title: 'Learning Portal',
    description: 'Built features for student authentication and curriculum access.',
  },
  {
    image: project6,
    title: 'Tree Visualizer',
    description: 'Visualization of binary trees with animation.',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          <FaAddressCard className="inline-block mr-2 text-gray-700" />
          Portfolio
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden bg-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;