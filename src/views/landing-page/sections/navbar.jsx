import React from 'react';
import { UilHome } from '@iconscout/react-unicons';
import '../../../assets/navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="icon">
        <a href="/"><UilHome size="20" color="#FEFAE0" /></a>
      </div>
      <ul className="ul">
        <li className="li"><a className="a" href="/alerta-coletas">Alertas</a></li>
        <li className="li"><a className="a" href="/about">Parceiros</a></li>
        <li className="li"><a className="a" href="/contact">Sobre nós</a></li>
        <li className="li"><a className="a" href="/contact">Como ajudar?</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;