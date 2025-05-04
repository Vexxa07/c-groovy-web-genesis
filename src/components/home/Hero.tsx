
import React from 'react';
import { Link } from 'react-router-dom';
import { Headphones, Music } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-music-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-40 left-10 w-40 h-40 bg-music-purple rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-music-lightPurple rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Music for <span className="bg-gradient-to-r from-music-purple to-music-lightPurple bg-clip-text text-transparent">Everyone</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover, stream, and share songs that resonate with you, anytime and anywhere. Join millions enjoying C'Groovy's personalized music experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/register" 
                className="bg-music-purple hover:bg-music-darkPurple text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center"
              >
                <Music className="w-5 h-5 mr-2" />
                Start Listening
              </Link>
              <Link 
                to="/songs" 
                className="border border-music-purple text-white hover:bg-music-purple/20 px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center"
              >
                <Headphones className="w-5 h-5 mr-2" />
                Explore Songs
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-music-purple/20 to-music-lightPurple/20 rounded-full animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600&q=80" 
                alt="Person enjoying music" 
                className="absolute inset-0 w-full h-full object-cover rounded-full p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
