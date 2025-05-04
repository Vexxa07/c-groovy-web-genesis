
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedSongs from '@/components/home/FeaturedSongs';
import Slider from '@/components/home/Slider';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Slider />
      <FeaturedSongs />
    </Layout>
  );
};

export default Index;
