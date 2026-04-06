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



// =================== APP CONTENT ===================
function AppContent() {
  const location = useLocation();
  const esconderWhats = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<LinkBridge />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/home" element={<Home />} />
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