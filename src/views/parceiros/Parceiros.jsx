// src/views/Support.jsx
import React from 'react';
import Navbar from '../landing-page/sections/navbar';
import Footer from '../../components/footer';
import '../../assets/body.css';
import '../../assets/apoio.css';

// Importando diretamente as imagens
import senaiLogo from '../../assets/img/senai.png';

const Parceiros = () => {
  return (
    <div className="support-page">
      <Navbar />
      <main className="support-content">
        <section className="support-logos">
          <h2>Apoio</h2>
          <div className="logos-container">
            <img src={senaiLogo} alt="SENAI" className="support-logo" />
            <img src={senaiLogo} alt="SENAI" className="support-logo" />
            <img src={senaiLogo} alt="SENAI" className="support-logo" />
          </div>
        </section>
        <section className="support-contact">
          <h2>Como você pode ajudar?</h2>
          <p>Envie um e-mail para nós e entraremos em contato</p>
          <a href="mailto:reciclamaisflorianopolis@gmail.com" className="email-link">reciclamaisflorianopolis@gmail.com</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Parceiros;
