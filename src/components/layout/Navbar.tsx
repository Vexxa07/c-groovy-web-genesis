
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Music, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-music-darkGray fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Music className="h-8 w-8 text-music-purple mr-2" />
            <span className="text-xl font-bold bg-gradient-to-r from-music-purple to-music-lightPurple bg-clip-text text-transparent">
              C'Groovy
            </span>
          </Link>

          <div className="lg:hidden">
            <button 
              onClick={toggleMenu} 
              className="hamburger text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <ul className={cn(
            "nav-menu flex lg:items-center space-x-0 lg:space-x-8", 
            isOpen ? "active" : ""
          )}>
            <li className="p-4 lg:p-0">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-dropdown p-4 lg:p-0">
              <div className="flex items-center cursor-pointer">
                <span>Songs</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </div>
              <div className="dropdown-content">
                <Link to="/songs/pop" onClick={() => setIsOpen(false)}>Pop</Link>
                <Link to="/songs/rnb" onClick={() => setIsOpen(false)}>R&B</Link>
                <Link to="/songs/kpop" onClick={() => setIsOpen(false)}>K-Pop</Link>
                <Link to="/songs" onClick={() => setIsOpen(false)}>All Songs</Link>
              </div>
            </li>
            <li className="p-4 lg:p-0">
              <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            </li>
            <li className="p-4 lg:p-0">
              <Link 
                to="/register" 
                onClick={() => setIsOpen(false)}
                className="bg-music-purple hover:bg-music-darkPurple text-white px-4 py-2 rounded-full transition-all duration-300"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
