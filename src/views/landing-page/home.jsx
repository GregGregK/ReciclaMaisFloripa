import React from 'react';
import '../../assets/body.css'
import Navbar from './sections/navbar';
import Banner from './sections/banner';
import Footer from '../../components/footer';
import AdSections from './sections/adsections';

const Home = () => {
  return (
    <div className="main-content">
      <Navbar />
      <Banner />
      <AdSections />
      <Footer />
    </div>
  );
};

export default Home;
