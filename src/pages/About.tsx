
import React from 'react';
import Layout from '@/components/layout/Layout';
import AboutHero from '@/components/about/AboutHero';
import History from '@/components/about/History';
import Team from '@/components/about/Team';

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <History />
      <Team />
    </Layout>
  );
};

export default About;
