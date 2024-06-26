import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/landing-page/home';
import SearchResults from './views/pesquisa/SearchResults';
import AlertaColetas from './views/Coletas/AlertaColetas.jsx';
import CadastroAlerta from './views/Cadastro Alerta/CadastroAlerta.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/alerta-coletas" element={<AlertaColetas />} />
        <Route path="/cadastro-alerta" element={<CadastroAlerta />} />
      </Routes>
    </Router>
  );
};

export default App;
