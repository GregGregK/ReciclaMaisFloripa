import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../landing-page/sections/navbar';
import Footer from '../../components/footer';
import '../../assets/body.css';
import '../../assets/alerta-coletas.css'; // Estilização da página

const AlertaColetas = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const bairro = searchParams.get('bairro');

  const [coordenadas, setCoordenadas] = useState({ lat: 0, lng: 0 });
  const [nomeRota, setNomeRota] = useState('Nome: Não encontrado');
  const [descricaoRota, setDescricaoRota] = useState('Descrição: Não encontrada');
  const [mapaSelecionado, setMapaSelecionado] = useState('seletiva'); // Estado para controlar qual mapa está selecionado

  useEffect(() => {
    const obterCoordenadas = async (endereco) => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${endereco}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        );
        const data = await response.json();

        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setCoordenadas({ lat, lng });
        } else {
          console.error('Endereço não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao obter coordenadas:', error);
      }
    };

    obterCoordenadas(bairro);
  }, [bairro]);

  useEffect(() => {
    // Listener para receber mensagem do iframe com os detalhes da rota
    const receiveMessage = (event) => {
      if (event.origin !== 'https://www.google.com') return;

      const message = event.data;
      if (message.type === 'route_details') {
        setNomeRota(message.payload.nome || 'Nome: Não encontrado');
        setDescricaoRota(message.payload.descricao || 'Descrição: Não encontrada');
      }
    };

    window.addEventListener('message', receiveMessage);

    return () => {
      window.removeEventListener('message', receiveMessage);
    };
  }, []);

  const handleBackClick = () => {
    // Implemente a lógica desejada para voltar à página anterior
    console.log('Voltar clicado');
  };

  const handleMapToggle = (mapType) => {
    setMapaSelecionado(mapType);
  };

  return (
    <div className="alerta-coletas-page">
      <Navbar />
      <div className="alerta-coletas-content">
        <div className="info-container">
          <button className="back-button" onClick={handleBackClick}>Voltar</button>
          <span className="info-text">Exibindo resultados para: {bairro}</span>
          <div className="info-item">
            <h3>{nomeRota}</h3>
            <p>{descricaoRota}</p>
            <button className="remind-button">Lembrar-me</button>
          </div>
          <div className="map-toggle-buttons">
            <button
              className={`map-toggle-button ${mapaSelecionado === 'seletiva' ? 'active' : ''}`}
              onClick={() => handleMapToggle('seletiva')}
            >
              Coleta Seletiva
            </button>
            <button
              className={`map-toggle-button ${mapaSelecionado === 'convencional' ? 'active' : ''}`}
              onClick={() => handleMapToggle('convencional')}
            >
              Coleta Convencional
            </button>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src={
              mapaSelecionado === 'seletiva'
                ? `https://www.google.com/maps/d/embed?mid=1O_t7--E4ThnhgLoJChHu2ymi3GtUpjV7&ehbc=2E312F&ll=${coordenadas.lat},${coordenadas.lng}&z=12`
                : `https://www.google.com/maps/d/embed?mid=1tbLrVVv9QGukKekrxpENiylwAbGAmFqn&hl=pt-BR&ehbc=2E312F&ll=${coordenadas.lat},${coordenadas.lng}&z=12`
            }
            width="640"
            height="480"
            title="Mapa Customizado"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AlertaColetas;
