import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/landing-page/home';
import SearchResults from './views/pesquisa/SearchResults';
import AlertaColetas from './views/Coletas/AlertaColetas.jsx';
import CadastroAlerta from './views/Cadastro Alerta/CadastroAlerta.jsx';
import Parceiros from './views/parceiros/Parceiros.jsx';
import CadastroPontos from './views/Cadastro Ponto/CadastroPontoPage.jsx';
import Login from './views/Login/Login.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/alerta-coletas" element={<AlertaColetas />} />
        <Route path="/cadastro-alerta" element={<CadastroAlerta />} />
        <Route path="/parceiros" element={<Parceiros />} />
        <Route path="/cadastro-ponto" element={<CadastroPontos />} />
      </Routes>
    </Router>
  );
};

export default App;
