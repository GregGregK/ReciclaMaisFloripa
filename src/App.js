import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/landing-page/home';
import SearchResults from './views/pesquisa/pesquisa';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
