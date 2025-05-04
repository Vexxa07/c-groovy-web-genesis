
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SongGrid from '@/components/songs/SongGrid';
import { songs } from '@/data/songs';

const SongCollection = () => {
  const { genre } = useParams<{ genre?: string }>();
  
  // Validate genre parameter
  const validGenre = genre === 'pop' || genre === 'rnb' || genre === 'kpop' 
    ? genre 
    : undefined;
  
  return (
    <Layout>
      <div className="bg-gradient-to-b from-music-darkGray to-music-black min-h-screen py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">
            {validGenre 
              ? `${validGenre.toUpperCase()} Songs` 
              : 'All Songs Collection'}
          </h1>
          
          {!validGenre && (
            <>
              <SongGrid genre="pop" />
              <SongGrid genre="rnb" />
              <SongGrid genre="kpop" />
            </>
          )}
          
          {validGenre && (
            <SongGrid genre={validGenre} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SongCollection;
