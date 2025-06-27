import { FaInstagram, FaGooglePlusG, FaFacebook, FaGithub, FaLinkedin, FaCode} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-6 mt-10">
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4 text-xl">
        <a
          href="https://www.instagram.com/nee_raj_5415"
          className="hover:text-pink-500"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="mailto:neeraj010701@gmail.com"
          className="hover:text-red-500"
          aria-label="Gmail"
        >
          <FaGooglePlusG />
        </a>

        <a
          href="https://www.facebook.com/yourusername"
          className="hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="https://github.com/neeraj5415"
          className="hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/neeraj-kumar-61212b339"
          className="hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.naukri.com/code360/profile/5621ce18-6fb4-4115-8a28-6dee1b6a89a6"
          className="hover:text-orange-500"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Code360"
        >
          {/* You can use FaCode or any other icon since there's no official Code360 icon */}
          <FaCode />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm">&copy; {new Date().getFullYear()} Neeraj Kumar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;