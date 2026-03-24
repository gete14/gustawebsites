import React, { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

// Componentes
import Footer from "./Comuns/footer";
import NavBar from "./Comuns/NavBar";
import ScrollToTop from "./Comuns/ScrollToTop";
import WhatsAppButton from "./Comuns/wpp";

// Páginas
import Portfolio from "./Pages/Portfolio";
import Faq from "./Pages/Faq";
import LinkBridge from "./Pages/LinkBridge";
import Home from "./pages/Home";
import Orcamento from "./pages/Orcamento";
import Planos from "./Pages/Planos";
import Servicos from "./Pages/Servicos";

// =================== SCRIPT CLARITY ===================
function ClarityScript() {
  useEffect(() => {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/w0an01d2wz";
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "w0an01d2wz");
  }, []);

  return null;
}

// =================== SPA ROUTE TRACKING ===================
function ClarityRouter() {
  const location = useLocation();

  useEffect(() => {
    if (window.clarity) {
      window.clarity('set', 'page', location.pathname);
    }
  }, [location.pathname]);

  return null;
}

// =================== APP CONTENT ===================
function AppContent() {
  const location = useLocation();
  const esconderWhats = location.pathname === "/";

  return (
    <>
      <ClarityScript />
      <ClarityRouter />
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<LinkBridge />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/home" element={<Home />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>

      {!esconderWhats && <WhatsAppButton />}
      <Footer />
    </>
  );
}

// =================== APP PRINCIPAL ===================
export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}