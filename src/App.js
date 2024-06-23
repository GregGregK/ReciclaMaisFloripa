import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/landing-page/home';
import SearchResults from './views/pesquisa/SearchResults';
import AlertaColetas from './views/Coletas/AlertaColetas.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
        <Route path="/alerta-coletas" element={<AlertaColetas />} />
      </Routes>
    </Router>
  );
};

export default App;
