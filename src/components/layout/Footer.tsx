
import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-music-darkGray pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="flex items-center">
              <Music className="h-8 w-8 text-music-purple mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-music-purple to-music-lightPurple bg-clip-text text-transparent">
                C'Groovy
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              Bringing music to everyone's fingertips. Discover, stream, and share songs that resonate with you, anytime and anywhere.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-music-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-music-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-music-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-music-purple transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-music-purple transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-music-purple transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/songs" className="text-gray-400 hover:text-music-purple transition-colors">Songs</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-music-purple transition-colors">Register</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Music Street</p>
            <p className="text-gray-400">Music City, MC 12345</p>
            <p className="text-gray-400 mt-2">contact@cgroovy.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} C'Groovy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
