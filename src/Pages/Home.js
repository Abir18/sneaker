import React from 'react';
import Slider from '../components/Slider';
import Nav from '../components/Nav';
import Navigation from '../components/Navigation';
import FeaturedProducts from '../components/FeaturedProducts';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Slider />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
