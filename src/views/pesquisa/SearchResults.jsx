import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api';
import Navbar from '../landing-page/sections/navbar';
import Footer from '../../components/footer';
import '../../assets/body.css';
import '../../assets/searchresults.css'; // Estilização da página

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { address } = location.state || {};
  const [coordinates, setCoordinates] = useState(center);
  const [recyclingCenters, setRecyclingCenters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Substitua pela sua chave de API
    libraries: ['places'], // Adicione a biblioteca 'places'
  });

  const geocodeAddress = useCallback((address, map) => {
    if (!window.google || !window.google.maps) {
      console.error('Google Maps API is not loaded yet.');
      return;
    }
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        setCoordinates({ lat: location.lat(), lng: location.lng() });
        if (map) {
          const bounds = new window.google.maps.LatLngBounds();
          bounds.extend(location);
          map.fitBounds(bounds);
        }
        findRecyclingCenters(location);
      } else {
        console.error('Geocode was not successful for the following reason: ' + status);
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }, []);

  const findRecyclingCenters = (location) => {
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));
    const request = {
      location: location,
      radius: '1000', // Raio em metros
      keyword: 'Centro de Reciclagem',
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setRecyclingCenters(results.map(place => ({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          name: place.name,
          address: place.vicinity,
          type: 'Centro de Reciclagem', // Adicione um tipo padrão
        })));
      } else {
        console.error('Places search was not successful for the following reason: ' + status);
      }
    });
  };

  useEffect(() => {
    if (isLoaded && address) {
      geocodeAddress(address, map);
    }
  }, [isLoaded, address, geocodeAddress]);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleFilterClick = (filter) => {
    setSelectedFilters(prevFilters => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter(f => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  const filteredResults = selectedFilters.length > 0 
    ? recyclingCenters.filter(center => selectedFilters.includes(center.type))
    : recyclingCenters;

  const [map, setMap] = useState(null);

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
    if (address) {
      geocodeAddress(address, mapInstance);
    }
  }, [address, geocodeAddress]);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return (
    <div className="search-results-page">
      <Navbar />
      <div className="search-results-content">
        <div className="results-list-container">
          <div className="results-list">
            <div className="results-header">
              <button className="back-button" onClick={handleBackClick}>Voltar</button>
              <span className="results-text">Exibindo resultados para: {address}</span>
              <div className="filter-dropdown">
                <button className="filter-button">Filtrar</button>
                <div className="filter-menu">
                  {['Reciclável', 'Eletrônico', 'Isopor', 'Vidro', 'Pesados', 'Todos'].map(filter => (
                    <div 
                      key={filter} 
                      className={`filter-item ${selectedFilters.includes(filter) ? 'selected' : ''}`} 
                      onClick={() => handleFilterClick(filter)}
                    >
                      <input 
                        type="checkbox" 
                        checked={selectedFilters.includes(filter)} 
                        readOnly
                      />
                      <label>{filter}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {filteredResults.map((result, index) => (
              <div key={index} className={`result-item ${result.type.toLowerCase()}`}>
                <span>{result.name} - {result.address}</span>
                <span className="item-type">{result.type}</span>
                <button className="location-button">Ver localização</button>
              </div>
            ))}
          </div>
        </div>
        <div className="map">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={coordinates}
              zoom={12}
              onLoad={onLoad}
              onUnmount={onUnmount}
              onClick={() => setActiveMarker(null)}
            >
              <Marker position={coordinates} />
              {recyclingCenters.map((center, index) => (
                <Marker
                  key={index}
                  position={{ lat: center.lat, lng: center.lng }}
                  onMouseOver={() => handleActiveMarker(index)}
                >
                  {activeMarker === index ? (
                    <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                      <div>
                        <h3>{center.name}</h3>
                        <p>{center.address}</p>
                      </div>
                    </InfoWindow>
                  ) : null}
                </Marker>
              ))}
            </GoogleMap>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
