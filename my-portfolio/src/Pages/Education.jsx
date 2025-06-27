import { FaSchool } from 'react-icons/fa';
import eduLogo from '../assets/react.svg'; // Replace with your education logo

const educationData = [
  {
    institute: 'OHMIC Jakholi Rudraprayag',
    degree: 'Intermediate',
    duration: '2015 - 2016',
    description:
      'Studied science subjects including Maths. 76%.',
    logo: eduLogo,
  },
  {
    institute: 'OHMIC Jakholi Rudraprayag',
    degree: 'Inter',
    duration: '2017 - 2018',
    description:
      'Focused on Mathematics, Physics, Chemistry, and Computer Science. 62%',
    logo: eduLogo,
  },
  {
    institute: 'Tulas Institute',
    degree: 'Diploma',
    duration: '2018 - 2021',
    description:
      'Completed foundational education with a strong focus on logical thinking and problem-solving. Where I developed many skills in Computer, Mechanical',
    logo: eduLogo,
  },
  {
    institute: 'Coding ninjas',
    degree: 'Full Stack Developer || Front end development and Web development',
    duration: '2024 - 2026',
    description:
      'Focused on learning development, Made many projects and gained some good knoladge of softwere.',
    logo: eduLogo,
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-gray-100 py-12 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          <FaSchool className="inline-block mr-2 text-gray-700" />
          Education
        </h2>

        <div className="space-y-8 relative border-l-2 border-gray-300 pl-6">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-9 top-15 w-6 h-6 bg-green-600 rounded-full"></div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-2">
                  <img
                    src={edu.logo}
                    alt={`${edu.institute} logo`}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <h4 className="text-sm text-gray-600">{edu.institute}</h4>
                    <span className="text-xs text-gray-500">{edu.duration}</span>
                  </div>
                </div>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;