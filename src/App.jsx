import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

// Componentes
import Footer from "./components/common/Footer";
import NavBar from "./components/common/Header";
import ScrollToTop from "./components/common/ScrollToTop";
import WhatsAppButton from "./components/common/WhatsAppButton";

// Páginas
import Portfolio from "./pages/Portfolio/Portfolio";
import LinkBridge from "./pages/LinkBridge/LinkBridge";
import Home from "./pages/Home/Home";

import '../src/styles/404.css'



// =================== APP CONTENT ===================
function AppContent() {
  const location = useLocation();
  const esconderWhats = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/link-bridge" element={<LinkBridge />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <div className="pagina-404">
              <div className="erro-404">
                <span>404</span>

                <h1>Página não encontrada</h1>

                <p>
                  Ops! A página que você está procurando não existe
                  ou foi removida.
                </p>

                <Link to="/" className="botao-404">
                  Voltar para o início
                </Link>
              </div>
            </div>
          }
        />
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