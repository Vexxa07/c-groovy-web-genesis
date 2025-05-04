
import React from 'react';
import { companyHistory } from '@/data/team';

const HistoryItem = ({ item, index }: { item: any; index: number }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="md:w-1/5 flex flex-col items-center md:items-end">
        <div className="bg-music-purple text-white font-bold py-2 px-4 rounded-full">
          {item.year}
        </div>
        {index !== companyHistory.length - 1 && (
          <div className="w-px h-24 bg-gradient-to-b from-music-purple to-transparent mt-3 hidden md:block"></div>
        )}
      </div>
      <div className="md:w-4/5 bg-music-gray p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-300">{item.description}</p>
      </div>
    </div>
  );
};

const History = () => {
  return (
    <div className="py-16 bg-music-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
        <div className="space-y-8">
          {companyHistory.map((item, index) => (
            <HistoryItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
