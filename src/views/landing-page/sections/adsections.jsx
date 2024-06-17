// src/views/landing-page/AdSections.jsx
import React from 'react';
import '../../../assets/adsections.css';

// Importe as imagens (adicione suas imagens ao diretório apropriado)
import image1 from '../../../assets/img/eco1.png'; // Substitua pelo caminho correto da imagem
import image2 from '../../../assets/img/eco2.png'; // Substitua pelo caminho correto da imagem

const AdSections = () => {
  return (
    <div className="ad-sections">
      <div className="ad-section">
        <h2>Digite seu bairro e se informe dos dias de coleta</h2>
        <input
          type="text"
          placeholder="Digite o seu bairro"
        />
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
