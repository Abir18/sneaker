import React from 'react';
import Slider from '../components/Slider';
import Nav from '../components/Nav';
import Navigation from '../components/Navigation';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <Nav />
      <Slider />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
