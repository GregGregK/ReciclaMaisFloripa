import React from 'react';
import '../../assets/body.css';
import CadastroPontoForm from '../../components/CadastroPontoForm';
import Navbar from '../landing-page/sections/navbar';
import Footer from '../../components/footer';

const CadastroPontoPage = () => {
  return (
    <div className="cadastro-alerta-page">
      <Navbar />
      <div className="main-content">
        <CadastroPontoForm />
      </div>
      <Footer />
    </div>
  );
};

export default CadastroPontoPage;
