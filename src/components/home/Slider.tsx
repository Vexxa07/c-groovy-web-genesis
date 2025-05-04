
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getRecommendedSongs } from '@/data/songs';
import { Link } from 'react-router-dom';

const Slider = () => {
  const recommendedSongs = getRecommendedSongs();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<number | null>(null);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % recommendedSongs.length);
    }, 5000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    startSlideTimer();
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recommendedSongs.length);
    startSlideTimer();
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recommendedSongs.length) % recommendedSongs.length);
    startSlideTimer();
  };

  return (
    <div className="bg-music-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Recommended For You</h2>
        
        <div className="slider-container rounded-xl bg-music-darkGray relative">
          {recommendedSongs.map((song, index) => (
            <div 
              key={song.id}
              className={`slider-item ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="relative w-full h-full">
                <img 
                  src={song.image} 
                  alt={song.title}
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-6">
                    <div className="md:w-2/3 lg:w-1/2">
                      <h2 className="text-3xl md:text-4xl font-bold mb-3">{song.title}</h2>
                      <p className="text-xl text-gray-300 mb-3">{song.artist}</p>
                      <p className="text-gray-400 mb-6 line-clamp-2">
                        {song.description}
                      </p>
                      <Link
                        to={`/song/${song.id}`}
                        className="bg-music-purple hover:bg-music-darkPurple text-white px-6 py-2 rounded-full inline-flex items-center transition-colors"
                      >
                        Listen Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <button 
            className="slider-arrow left" 
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          
          <button 
            className="slider-arrow right" 
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10 gap-2">
            {recommendedSongs.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-music-purple' : 'bg-gray-500'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
