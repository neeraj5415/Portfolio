import { FaBriefcase, FaPlane } from 'react-icons/fa';
import companyLogo from '../assets/react.svg'; // Replace with actual path

const experiences = [
  {
    company: 'NeuroNexus Innovations',
    role: 'UI / UX Development Intern (Remote)',
    duration: '28 March 2025 -28 April 2025',
    description:
      'Built responsive user interfaces using HTML, CSS, and JavaScript Also have worked with Photoshop, Bootstarp, Tailwind css',
    logo: companyLogo,
  },
  {
    company: 'NeuroNexus Innovations',
    role: 'Web Developer Intern (Remote)',
    duration: ' 28 April 2025 -28 May 2025',
    description:
      'Worked on web applications and contributed to UI/UX services and internal tools.',
    logo: companyLogo,
  },
  {
    company: 'Infotact Solutions',
    role: 'Front end developer',
    duration: '1 June 2025 - 30 Aguest 2025',
    description:
      'Developed scalable applications with React and also gained skills in backend development using MongoDB, APIs, JSON, etc.',
    logo: companyLogo,
  },
  {
    company: 'I would like to mention that I am learning from past one year 2025 so I have worked in many projects',
    role: 'Project Lead',
    duration: 'Apr 2018 - Present',
    description:
      'Led frontend teams in multiple high-impact projects and mentored junior developers.',
    logo: companyLogo,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-100 py-12 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-10">
                <FaBriefcase className="inline-block mr-2 text-gray-700" />
                Experience
              </h2>
              <div className="space-y-8 relative border-l-2 border-gray-300 pl-6">
                {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-9 top-15 w-6 h-6 bg-green-600 rounded-full"></div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={exp.logo}
                    alt={`${exp.companyLogo} logo`}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <h4 className="text-sm text-gray-600">{exp.company}</h4>
                    <span className="text-xs text-gray-500">{exp.duration}</span>
                  </div>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;