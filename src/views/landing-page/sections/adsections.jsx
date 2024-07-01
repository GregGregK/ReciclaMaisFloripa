import React, { useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import '../../../assets/adsections.css';

// Importe as imagens (adicione suas imagens ao diretório apropriado)
import image1 from '../../../assets/img/eco1.png';
import image2 from '../../../assets/img/eco2.png';

const AdSections = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        setValue(place.formatted_address);
      }
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  const handleSearchClick = () => {
    navigate(`/alerta-coletas?bairro=${encodeURIComponent(value)}`);
  };

  const handleCadastroClick = () => {
    navigate('/cadastro-alerta');
  };

  return (
    <div className="ad-sections">
      <div className="ad-section">
        <h2>Digite seu bairro e se informe dos dias de coleta</h2>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="search-container">
              <input
                type="text"
                placeholder="Digite o seu bairro"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button onClick={handleSearchClick}>Pesquisar</button>
            </div>
          </Autocomplete>
        </LoadScript>
        <img src={image1} alt="Imagem relacionada ao anúncio 1" />
      </div>
      <div className="ad-section">
        <h2>Não perca mais o dia de coleta!</h2>
        <p>Cadastre seu número e receba uma mensagem avisando quando irão passar por sua rua!</p>
        <button onClick={handleCadastroClick}>Cadastrar</button>
        <img src={image2} alt="Imagem relacionada ao anúncio 2" />
      </div>
    </div>
  );
};

export default AdSections;
