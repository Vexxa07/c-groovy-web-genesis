
import React from 'react';
import { teamMembers } from '@/data/team';

const TeamMemberCard = ({ member }: { member: any }) => {
  return (
    <div className="bg-music-gray rounded-lg overflow-hidden hover:shadow-lg transition-shadow song-card">
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-60 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-music-purple font-medium mb-4">{member.position}</p>
        <p className="text-gray-300">{member.bio}</p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-music-black to-music-darkGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The passionate individuals behind C'Groovy who work tirelessly to bring you the best music experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
