import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home scrollTo="about" />} />
          <Route path="/capabilities" element={<Home scrollTo="capabilities" />} />
          <Route path="/focus" element={<Home scrollTo="capabilities" />} />
          <Route path="/projects-wallet" element={<Home scrollTo="projects" />} />
          <Route path="/journey" element={<Home scrollTo="journey" />} />
          <Route path="/faq" element={<Home scrollTo="faq" />} />
          <Route path="/contact" element={<Home scrollTo="contact" />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
