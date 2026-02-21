import '../styles/footer.css'
import { FiClock, FiMapPin } from 'react-icons/fi'
import { Link as ScrollLink } from 'react-scroll'
import { useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()

  // 🔥 não mostrar na home
  if (location.pathname === "/") return null

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
              <ScrollLink to="servicos" smooth duration={500} offset={-90}>
                Serviços
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="portfolio" smooth duration={500} offset={-90}>
                Portfólio
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="planos" smooth duration={500} offset={-90}>
                Planos
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="faq" smooth duration={500} offset={-90}>
                FAQ
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contato" smooth duration={500} offset={-90}>
                Contato
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* INFORMAÇÕES */}
        <div className="footer-col">
          <h4>Informações Adicionais</h4>
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
