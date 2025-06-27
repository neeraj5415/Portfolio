import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaInstagram, FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="fixed top-0 left-0 z-50 bg-black text-white w-full">
      <nav className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center">
        {/* Logo/Name */}
        <div className="text-center md:text-left mb-2 md:mb-0">
          <h1 className="text-3xl font-bold">Neeraj Kumar</h1>
        </div>

        {/* Hamburger for Mobile */}
        <button className="md:hidden text-white text-2xl" onClick={toggleNav}>
          <FaBars />
        </button>

        {/* Links */}
        <ul className={`md:flex md:items-center md:space-x-6 ${isNavOpen ? 'block' : 'hidden'} text-center`}>
          {['home', 'about', 'skills', 'experience', 'education', 'portfolio', 'contact'].map((section) => (
            <li key={section} className="text-xl my-2 md:my-0">
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:underline uppercase"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;