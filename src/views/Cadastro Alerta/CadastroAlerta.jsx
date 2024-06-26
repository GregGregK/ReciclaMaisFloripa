import React from 'react';
import '../../assets/body.css';
import CadastroAlertaForm from '../../components/CadastroAlertaForm';
import Navbar from '../landing-page/sections/navbar';
import Footer from '../../components/footer';

import '../../assets/CadastroAlerta.css'; // Import the CSS file for page styling

const CadastroAlerta = () => {
  return (
    <div className="cadastro-alerta-page">
      <Navbar />
      <div className="main-content">
        <CadastroAlertaForm />
      </div>
      <Footer />
    </div>
  );
};

export default CadastroAlerta;
