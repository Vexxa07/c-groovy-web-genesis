
import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Music } from 'lucide-react';
import { Song } from '@/data/songs';

interface SongCardProps {
  song: Song;
}

const SongCard = ({ song }: SongCardProps) => {
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
          <span className="bg-music-purple/20 text-music-purple text-xs px-2 py-1 rounded-full">
            {song.genre.toUpperCase()}
          </span>
        </div>
        <p className="text-sm text-gray-300 mb-2 flex items-center">
          <Music className="h-3 w-3 mr-1" />
          {song.artist}
        </p>
        <p className="text-xs text-gray-400 line-clamp-2">{song.description}</p>
      </div>
    </div>
  );
};

export default SongCard;
