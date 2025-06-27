import profileImage from '../assets/img1.jpeg';
import { Link } from 'react-router-dom';
import bg from '../assets/bgimg.jpg';

const About = () => {
  return (
    <section id="about" className="bg-white p-50 bg-cover bg-center" style={{backgroundImage:`url(${bg})`}}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Profile Image */}
        <div className="w-180 h-77 rounded-full overflow-hidden shadow-md border-8 border-black">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* About Text */}
        <div className="bg-black/70 p-5 rounded-lg text-green-600">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m <strong>Neeraj Kumar</strong>, a passionate developer focused on creating
            responsive and dynamic web applications. I enjoy learning new technologies and building
            projects that solve real-world problems.
            <br /><br />
            Skilled in HTML, CSS, JavaScript, React, Java, and more. I’m always looking for
            opportunities to grow and collaborate on exciting projects.
          </p>

          {/* Link to full life journey */}
          <Link
            to="/more-about"
            className="inline-block mt-4 px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            My full life journey
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;