import { FaAddressBook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaGooglePlusG, FaFacebook, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-10">
          <FaAddressBook className="inline-block mr-2 text-gray-700" />
          Contact
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Form */}
          <div className="flex-1 text-white bg-gradient-to-b from-[#0f172a] to-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl text-white font-semibold mb-4">You can type your Message</h3>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mb-4 p-2 border border-gray-300 rounded text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mb-4 p-2 border border-gray-300 rounded"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full mb-4 p-2 border border-gray-300 rounded text-white"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded "
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 bg-gradient-to-b from-[#0f172a] to-black text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-6 text-xl">
              I'm available for freelance or full-time opportunities. Connect with me via phone or email.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>India</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FaPhone className="text-blue-600" />
              <span>(+91) 7302011096, 9690759542</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-blue-600" />
              <span>neeraj010701@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;