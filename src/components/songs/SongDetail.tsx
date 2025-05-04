
import React, { useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Music, List } from 'lucide-react';
import { getSongById, Song } from '@/data/songs';

const SongDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const song = getSongById(id || '');
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    if (!song) {
      navigate('/songs');
    }
  }, [song, navigate]);
  
  if (!song) {
    return null;
  }
  
  return (
    <div className="bg-gradient-to-b from-music-darkGray to-music-black py-12">
      <div className="container mx-auto px-4">
        <Link 
          to="/songs" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-6"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Songs
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Song Image */}
          <div className="lg:col-span-1">
            <div className="relative aspect-square bg-music-gray rounded-lg overflow-hidden shadow-xl">
              <img 
                src={song.image} 
                alt={song.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Song Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-music-purple/20 text-music-purple text-xs px-2 py-1 rounded-full">
                  {song.genre.toUpperCase()}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">{song.title}</h1>
              <p className="text-xl text-gray-300 flex items-center">
                <Music className="h-5 w-5 mr-2" />
                {song.artist}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">About This Song</h3>
              <p className="text-gray-300">{song.description}</p>
            </div>
            
            <div className="custom-audio-player">
              <audio ref={audioRef} controls src={song.audio} className="w-full">
                Your browser does not support the audio element.
              </audio>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <List className="h-5 w-5 mr-2" />
                Lyrics
              </h3>
              <div className="bg-music-gray p-6 rounded-lg whitespace-pre-line text-gray-300">
                {song.lyrics}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetail;
