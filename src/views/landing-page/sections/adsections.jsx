import React, { useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate ao invés de useHistory
import '../../../assets/adsections.css';

// Importe as imagens (adicione suas imagens ao diretório apropriado)
import image1 from '../../../assets/img/eco1.png'; // Substitua pelo caminho correto da imagem
import image2 from '../../../assets/img/eco2.png'; // Substitua pelo caminho correto da imagem

const AdSections = () => {
  const navigate = useNavigate(); // Use useNavigate ao invés de useHistory
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigate(`/alerta-coletas?bairro=${encodeURIComponent(value)}`); // Utilize navigate ao invés de history.push
    }
  };

  return (
    <div className="ad-sections">
      <div className="ad-section">
        <h2>Digite seu bairro e se informe dos dias de coleta</h2>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} libraries={['places']}>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <input
              type="text"
              placeholder="Digite o seu bairro"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </Autocomplete>
        </LoadScript>
        <img src={image1} alt="Imagem relacionada ao anúncio 1" />
      </div>
      <div className="ad-section">
        <h2>Não perca mais o dia de coleta!</h2>
        <p>Cadastre seu número e receba uma mensagem avisando quando irão passar por sua rua!</p>
        <button>Cadastrar</button>
        <img src={image2} alt="Imagem relacionada ao anúncio 2" />
      </div>
    </div>
  );
};

export default AdSections;
