import React from 'react';
import CadastroAlertaForm from './CadastroAlertaForm';
import Navbar from '../landing-page/sections/navbar';
import '../../assets/CadastroAlerta.css'; // Import the CSS file for page styling

const CadastroAlerta = () => {
  return (
    <div className="cadastro-alerta-page">
      <header className="header">
        <Navbar />
      </header>
      <div className="banner">
        <CadastroAlertaForm />
      </div>
    </div>
  );
};

export default CadastroAlerta;
