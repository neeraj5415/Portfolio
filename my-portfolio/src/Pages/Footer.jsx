import { FaInstagram, FaGooglePlusG, FaFacebook, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-6 mt-10">
      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4 text-xl">
        <a href="#" className="hover:text-blue-400" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-red-400" aria-label="Google Plus">
          <FaGooglePlusG />
        </a>
        <a href="#" className="hover:text-blue-600" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="#" className="hover:text-gray-400" aria-label="GitHub">
          <FaGithub />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm">&copy; {new Date().getFullYear()} Neeraj Kumar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;