const skills = [
  { name: 'Java', level: 65, color: 'bg-yellow-500' },
  { name: 'HTML', level: 90, color: 'bg-red-500' },
  { name: 'CSS', level: 90, color: 'bg-black' },
  { name: 'JavaScript', level: 70, color: 'bg-gray-600' },
  { name: 'SQL', level: 65, color: 'bg-green-500' },
  { name: 'MongoDB', level: 90, color: 'bg-blue-500' },
  { name: 'Bootstrap', level: 90, color: 'bg-pink-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="text-black py-10 px-4 md:px-10 mt-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Skills
        </h2>

        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div
                  className={`${skill.color} h-4 rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;