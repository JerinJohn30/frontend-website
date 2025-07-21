import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Services from '../components/Services';
import Industries from '../components/Industries';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <Services />
      <Industries />
      <FAQ />
    </>
  );
};

export default Home;