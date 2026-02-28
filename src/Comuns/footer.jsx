import '../styles/footer.css'
import { FiClock, FiMapPin } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()

  // Não mostrar na home
  if (location.pathname === "/") return null

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* SERVIÇOS */}
        <div className="footer-col">
          <h4>Serviços</h4>
          <ul>
            <li>Desenvolvimento Web</li>
            <li>Suporte Técnico</li>
            <li>Consultoria Digital</li>
            <li>Otimização SEO</li>
            <li>Manutenção de Sites</li>
          </ul>
        </div>

        {/* NAVEGAÇÃO */}
        <div className="footer-col">
          <h4>Navegação</h4>
          <ul>
            <li>
              <Link to="servicos">Serviços</Link>
            </li>
            <li>
              <Link to="portfolio">Portfólio</Link>
            </li>
            {/*<li>
              <Link to="planos">Planos</Link>
            </li>*/}
            <li>
              <Link to="faq">FAQ</Link>
            </li>
            <li>
              <Link to="orcamento" className="footer-cta">
                Solicitar Orçamento
              </Link>
            </li>
          </ul>
        </div>

        {/* INFORMAÇÕES */}
        <div className="footer-col">
          <h4>Informações</h4>
          <div className="footer-info">
            <span>
              <FiClock />
              Seg à Sex 08:00 às 20:00
            </span>
            <span>
              <FiMapPin />
              Atendimento para todo o Brasil
            </span>
          </div>
        </div>

      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} – Gustavo Robson S. Silva. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer