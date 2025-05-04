
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star } from 'lucide-react';
import { getFeaturedSongs, Song } from '@/data/songs';

const SongCard = ({ song }: { song: Song }) => {
  return (
    <div className="song-card bg-music-gray rounded-lg overflow-hidden">
      <div className="relative">
        <img 
          src={song.image} 
          alt={song.title} 
          className="w-full h-48 object-cover"
        />
        <Link 
          to={`/song/${song.id}`}
          className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <Play className="w-12 h-12 text-white" />
        </Link>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold line-clamp-1">{song.title}</h3>
          <Star className="w-4 h-4 text-yellow-400" fill="#FACC15" />
        </div>
        <p className="text-sm text-gray-300 mb-1">{song.artist}</p>
        <p className="text-xs text-gray-400 line-clamp-2">{song.description}</p>
      </div>
    </div>
  );
};

const FeaturedSongs = () => {
  const featuredSongs = getFeaturedSongs();
  
  return (
    <div className="bg-music-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Songs</h2>
          <Link to="/songs" className="text-music-purple hover:text-music-lightPurple transition-colors">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSongs;
