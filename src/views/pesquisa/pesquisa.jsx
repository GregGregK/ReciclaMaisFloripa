import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../landing-page/sections/navbar';
import '../../assets/body.css'
import Footer from '../../components/footer';
import '../../assets/searchresults.css'; // Estilização da página

const SearchResults = () => {
    const navigate = useNavigate();
    const [selectedFilters, setSelectedFilters] = useState([]);
  
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
  
    const results = [
      { text: '*Lorem ipsum dolor sit amet, consectetur adipiscing elit.', type: 'Reciclável' },
      { text: '*Lorem ipsum dolor sit amet, consectetur adipiscing elit.', type: 'Eletrônico' },
      { text: '*Lorem ipsum dolor sit amet, consectetur adipiscing elit.', type: 'Isopor' },
      { text: '*Lorem ipsum dolor sit amet, consectetur adipiscing elit.', type: 'Vidro' },
      { text: '*Lorem ipsum dolor sit amet, consectetur adipiscing elit.', type: 'Pesados' }
    ];
  
    const filteredResults = selectedFilters.length > 0 
      ? results.filter(result => selectedFilters.includes(result.type))
      : results;
  
    return (
      <div className="search-results-page">
        <Navbar />
        <div className="search-results-content">
          <div className="results-list-container">
            <div className="results-list">
              <div className="results-header">
                <button className="back-button" onClick={handleBackClick}>Voltar</button>
                <span className="results-text">Exibindo resultados para: Rio Vermelho, 00000-000</span>
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
                  <span>{result.text}</span>
                  <span className="item-type">{result.type}</span>
                  <button className="location-button">Ver localização</button>
                </div>
              ))}
            </div>
          </div>
          <div className="map">
            <img src="/path/to/map-image.png" alt="Mapa" />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default SearchResults