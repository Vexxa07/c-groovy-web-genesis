
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    bio: 'Sarah founded C\'Groovy in 2016 with a vision to make music accessible to everyone. With her background in music production and technology, she has led the company to become one of the leading music streaming services worldwide.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    bio: 'Michael oversees all technology operations at C\'Groovy. His expertise in software engineering and machine learning has been instrumental in developing the platform\'s recommendation algorithm and seamless user experience.'
  },
  {
    id: 3,
    name: 'David Rodriguez',
    position: 'Head of Music Partnerships',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    bio: 'David manages relationships with artists, labels, and distributors to bring the best music to our platform. With over 15 years in the music industry, he has built an extensive network that allows C\'Groovy to offer exclusive content.'
  },
  {
    id: 4,
    name: 'Olivia Kim',
    position: 'Head of User Experience',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    bio: 'Olivia leads the UX design team, ensuring that C\'Groovy provides an intuitive and enjoyable experience for all users. Her focus on user-centered design has been key to the platform\'s growing popularity.'
  },
  {
    id: 5,
    name: 'James Wilson',
    position: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80',
    bio: 'James oversees all marketing initiatives at C\'Groovy. His innovative campaigns have significantly expanded our user base and established C\'Groovy as a recognized brand in the competitive streaming market.'
  }
];

export const companyHistory = [
  {
    year: 2016,
    title: 'Founded in San Francisco',
    description: 'C\'Groovy was founded by Sarah Johnson with the mission to create a music streaming service focused on discovery and personalization.'
  },
  {
    year: 2017,
    title: 'First 1 Million Users',
    description: 'Within a year of launching, C\'Groovy reached its first million users, demonstrating the strong market demand for the platform.'
  },
  {
    year: 2018,
    title: 'International Expansion',
    description: 'C\'Groovy expanded its services to Europe and Asia, making the platform available in over 30 countries worldwide.'
  },
  {
    year: 2020,
    title: 'Major Platform Redesign',
    description: 'The platform underwent a significant redesign, enhancing user experience and introducing innovative features like mood-based playlists.'
  },
  {
    year: 2022,
    title: 'Reached 50 Million Users',
    description: 'C\'Groovy celebrated reaching 50 million users globally, solidifying its position as one of the leading music streaming services.'
  },
  {
    year: 2024,
    title: 'Launch of C\'Groovy Studio',
    description: 'Introduced C\'Groovy Studio, a new feature allowing independent artists to upload and promote their music directly on the platform.'
  }
];
