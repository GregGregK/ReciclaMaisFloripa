import React, { useState, useEffect } from 'react';
import { UilHome } from '@iconscout/react-unicons';
import '../../../assets/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint (768) as needed
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <nav className="nav">
      <div className="icon">
        <a href="/"><UilHome size="20" color="#FEFAE0" /></a>
      </div>
      {isMobile ? (
        <>
          <button className="menu-button" onClick={toggleMenu}>☰</button>
          <ul className={`ul mobile-menu ${menuOpen ? 'show' : ''}`}>
            <li className="li"><a className="a" href="/alerta-coletas">Rotas Coleta</a></li>
            <li className="li"><a className="a" href="/parceiros">Parceiros</a></li>
            <li className="li"><a className="a" href="/cadastro-alerta">Alertas</a></li>
            <li className="li"><a className="a" href="/cadastro-ponto">Solicitar Ponto</a></li>
          </ul>
        </>
      ) : (
        <ul className="ul desktop-menu">
          <li className="li"><a className="a" href="/alerta-coletas">Rotas Coleta</a></li>
            <li className="li"><a className="a" href="/parceiros">Parceiros</a></li>
            <li className="li"><a className="a" href="/cadastro-alerta">Alertas</a></li>
            <li className="li"><a className="a" href="/cadastro-ponto">Solicitar Ponto</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
