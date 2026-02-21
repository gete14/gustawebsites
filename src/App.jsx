// App.jsx
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// Componentes
import Footer from "./Comuns/Footer";
import NavBar from "./Comuns/NavBar";
import ScrollToTop from "./Comuns/ScrollToTop";

// Páginas
import Portfolio from "./Pages/Portfolio";
import Faq from "./Pages/Faq";
import LinkBridge from "./Pages/LinkBridge";
import Home from "./pages/Home";
import Contato from "./Pages/Contato";
import Planos from "./Pages/Planos";
import Servicos from "./Pages/Servicos";

export default function App() {
  return (
    <HashRouter basename="/">
      <ScrollToTop />

      <NavBar />

      <Routes>
        <Route path="/" element={<LinkBridge />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/servicos" element={<Servicos />} />
        

        {/* Página 404 */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}
