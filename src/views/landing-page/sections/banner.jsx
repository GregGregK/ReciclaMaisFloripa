// src/views/landing-page/Banner.jsx
import React from 'react';
import '../../../assets/banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <input
        type="text"
        className="search-input"
        placeholder="Digite o endereço para encontrar Ecopontos..."
      />
    </div>
  );
};

export default Banner;
