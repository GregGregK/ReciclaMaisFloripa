import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/body.css';
import Navbar from './sections/navbar';
import Banner from './sections/banner';
import Footer from '../../components/footer';
import AdSections from './sections/adsections';

const Home = () => {
  const navigate = useNavigate();
  const [searchAddress, setSearchAddress] = useState('');

  const handleAddressChange = (address) => {
    setSearchAddress(address);
  };

  const handleSearch = () => {
    navigate('/results', { state: { address: searchAddress } });
  };

  return (
    <div className="main-content">
      <Navbar />
      <Banner onAddressChange={handleAddressChange} onSearch={handleSearch} />
      <AdSections />
      <Footer />
    </div>
  );
};

export default Home;
