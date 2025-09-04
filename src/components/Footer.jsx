import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaApple } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Correct icon for 'X'
import { FaGooglePlay } from 'react-icons/fa'; // Play Store icon
import images from '../constants/images';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data for footer links
  const quickLinks = [
    { title: 'Our Services', path: '/services' },
    { title: 'About Us', path: '/about' },
    { title: 'Logistics', path: '/logistics' },
  ];

  const aboutLinks = [
    { title: 'Contact Us', path: '/contact' },
    { title: 'News', path: '/news' },
    { title: 'Blog', path: '/news' },
  ];

  const getStartedLinks = [
    { title: 'Request Demo', path: '/contact' },
    { title: 'Book Now', path: '/book' },
    // { title: 'Get our App', path: '/app' },
    { title: 'Newsletter', path: '/newsletter' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, path: 'https://facebook.com' },
    { icon: <FaLinkedinIn />, path: 'https://linkedin.com' },
    { icon: <FaXTwitter />, path: 'https://twitter.com' },
    { icon: <FaYoutube />, path: 'https://youtube.com' },
    { icon: <FaInstagram />, path: 'https://instagram.com' },
  ];

  const FooterLinkColumn = ({ title, links }) => (
    <div>
      <h3 className="text-white font-bold tracking-wide underline underline-offset-4 decoration-1">
        {title}
      </h3>
      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              to={link.path}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-[#121212] text-white relative">
      <div className="container mx-auto px-6 py-16">
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo, Socials, App Buttons */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img src={images.logo} alt="Hello Tractor" className="w-40" />
            </Link>
            <p className="mt-4 text-gray-400">Growing together.</p>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Download App Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-xl shadow-md transition-all"
              >
                <FaGooglePlay className="text-lg" />
                <span>Google Play</span>
              </button>

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-xl shadow-md transition-all"
              >
                <FaApple className="text-lg" />
                <span>App Store</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <FooterLinkColumn title="Quick Links" links={quickLinks} />

          {/* Column 3: About Us */}
          <FooterLinkColumn title="About Us" links={aboutLinks} />

          {/* Column 4: Get Started */}
          <FooterLinkColumn title="Get Started" links={getStartedLinks} />
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="flex space-x-4">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of service
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy policy
            </Link>
          </div>
          <p className="mt-4 sm:mt-0">
            © {new Date().getFullYear()} Logiprotech. All rights reserved.
          </p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
            <h2 className="text-xl font-semibold mb-4">🚀 Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              We’re updating our mobile app at the moment. Please check back
              later or continue using our website. Thank you for your patience!
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
