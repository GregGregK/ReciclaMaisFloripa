import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import '../../../assets/banner.css';

const Banner = ({ onAddressChange }) => {
  const [inputValue, setInputValue] = useState('');
  const [autocomplete, setAutocomplete] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (inputValue.trim() !== '') {
      navigate('/results', { state: { address: inputValue } });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const onLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        setInputValue(place.formatted_address);
        onAddressChange(place.formatted_address);
      }
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  return (
    <div className="banner">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
        <div className="search-container">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
              type="text"
              className="search-input"
              placeholder="Digite o endereço para encontrar Ecopontos..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </Autocomplete>
          <button className="search-button" onClick={handleSearch}>Pesquisar</button>
        </div>
      </LoadScript>
    </div>
  );
};

export default Banner;
