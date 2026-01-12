import '../styles/footer.css'
import { FiClock, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* SERVIÇOS */}
        <div className="footer-col">
          <h4>Serviços</h4>
          <ul>
            <li>Desenvolvimento Web</li>
            <li>Suporte</li>
            <li>Analítico</li>
            <li>Otimização SEO</li>
            <li>Manutenção de Sites</li>
          </ul>
        </div>
        {/* LINKS ÚTEIS */}
        <div className="footer-col">
          <h4>Links Úteis</h4>
          <ul>
            <li>
              <Link to="servicos" smooth duration={500} offset={-90}>
                Serviços
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth duration={500} offset={-90}>
                Portfólio
              </Link>
            </li>
            <li>
              <Link to="planos" smooth duration={500} offset={-90}>
                Planos
              </Link>
            </li>
            <li>
              <Link to="faq" smooth duration={500} offset={-90}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="contato" smooth duration={500} offset={-90}>
                Contato
              </Link>
            </li>
          </ul>
        </div>


        {/* INFORMAÇÕES */}
        <div className="footer-col">
          <h4>Informações Adicionais</h4>
          <div className="footer-info">
            <span>
              <FiClock />
              Seg á Sex 08:00 às 20:00
            </span>
            <span>
              <FiMapPin />
              Atendimento para todo o Brasil
            </span>
          </div>
        </div>

      </div>

      {/* DIVISÓRIA */}
      <div className="footer-divider" />

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© 2025 – Gustavo Robson S. Silva. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
