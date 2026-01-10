import '../styles/footer.css'
import { FiClock, FiMapPin } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* SOBRE MIM */}
        <div className="footer-col">
          <h4>Sobre Mim</h4>
          <p>
            Desenvolvedor web especializado em criar soluções digitais
            personalizadas que impulsionam negócios e marcas.
            Combinando design criativo e tecnologia de ponta para
            resultados excepcionais.
          </p>
        </div>

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
          <h4>Link Úteis</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><a href="#contato">Contato</a></li>
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
