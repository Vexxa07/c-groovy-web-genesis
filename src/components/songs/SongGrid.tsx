
import React from 'react';
import SongCard from './SongCard';
import { getSongsByGenre, Song } from '@/data/songs';

interface SongGridProps {
  genre?: 'pop' | 'rnb' | 'kpop';
  songs?: Song[];
  title?: string;
}

const SongGrid = ({ genre, songs: propsSongs, title }: SongGridProps) => {
  const songs = propsSongs || (genre ? getSongsByGenre(genre) : []);
  const gridTitle = title || (genre ? `${genre.toUpperCase()} Songs` : 'All Songs');
  
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{gridTitle}</h2>
        
        {songs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {songs.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No songs found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SongGrid;
