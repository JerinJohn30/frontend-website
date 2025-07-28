import React from 'react';
import Hero from './Hero';
import Products from './Products';
import Services from './Services';
import FAQ from './FAQ';
import AboutPage from './AboutPage';

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Services />
      <AboutPage />
      <FAQ />
    </>
  );
};

export default Home;