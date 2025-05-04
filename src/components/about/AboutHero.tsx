
import React from 'react';
import { Music } from 'lucide-react';

const AboutHero = () => {
  return (
    <div className="bg-music-darkGray py-20 lg:py-28">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-music-gray p-3 rounded-full mb-6">
          <Music className="h-8 w-8 text-music-purple" />
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          About C'Groovy
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Established in 2016, C'Groovy has been bringing music to everyone's fingertips, 
          allowing users to discover, stream, and share songs that resonate with them.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
