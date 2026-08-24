import '../../styles/footer.css'
import { useState, useEffect } from "react";
import { FiClock, FiMapPin } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { MdWhatsapp } from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import LogoBranca from '../../assets/logos/LOGO_BRANCA.png'
import SectionOrcamento from '../../components/sections/Orcamento/Orcamento.jsx'


function Footer() {

  const [modal, setModal] = useState(false)

  const location = useLocation()

  const scrollToSection = (e, id) => {
    e.preventDefault()

    const section = document.getElementById(id)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

    closeMenu()
  }

  const mensagemWhatsApp = encodeURIComponent(
    `Olá, Gustavo! 

Encontrei a Gusta Websites pelo site e gostaria de solicitar um orçamento para criar um site profissional para minha empresa.

Gostaria de saber mais sobre os projetos e como funciona o processo.`
  )


  const openOrcamento = () => {
    setModal(true)
  }


  const isActive = (path) => location.pathname === path
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* IMAGE */}
          <div className="footer-col">
            <img src={LogoBranca} alt="Gusta Websites" className="footer-logo" />
          </div>

          {/* TEXTO */}
          <div className="footer-col">
            <p>
              Crio sites profissionais que <br></br>conectam sua empresa a <br></br>mais clientes e resultados.
            </p>
          </div>
          {/* SERVIÇOS */}
          <div className="footer-col">
            <h4>Navegação</h4>
            <ul>
              <li>
                <a href="#section-hero" className={isActive('/') ? 'active' : ''} onClick={(e) => scrollToSection(e, 'section-hero')}>
                  Início
                </a>
              </li>

              <li>
                <a
                  href="#section-sobre"
                  onClick={(e) => scrollToSection(e, 'section-sobre')}
                >
                  Sobre
                </a>
              </li>

              <li>
                <a
                  href="#section-portfolio"
                  onClick={(e) => scrollToSection(e, 'section-portfolio')}
                >
                  Portfólio
                </a>
              </li>

              <li>
                <a
                  href="#section-processo"
                  onClick={(e) => scrollToSection(e, 'section-processo')}
                >
                  Processo
                </a>
              </li>

              <li>
                <a
                  href="#section-faq"
                  onClick={(e) => scrollToSection(e, 'section-faq')}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* INFORMAÇÕES */}
          <div className="footer-col">
            <h4>Informações</h4>
            <div className="footer-info">
              <span className={isActive('/') ? 'active' : ''}>
                <FiClock />
                Seg à Sex 08:00 às 20:00
              </span>
              <span className={isActive('/') ? 'active' : ''}>
                <FiMapPin />
                Atendimento para todo o Brasil
              </span>
              <a
                href={`https://wa.me/5511915079401?text=${mensagemWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-whatsapp"
              >
                <FaWhatsapp />
                +55 11 91507-9401
              </a>

              <a
                href="https://www.instagram.com/gustawebsites/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-instagram"
              >
                <FaInstagram />
                @gustawebsites
              </a>
            </div>
          </div>

          <div className="footer-text-and-button">
            <span>
              Quer um site profissional <br></br> para sua empresa?
            </span>
            <button className="button1" onClick={openOrcamento}>
              <MdWhatsapp /> Solicitar Orçamento
            </button>

          </div>

        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} – Gustavo Robson - Todos os direitos reservados.</p>
        </div>
      </footer>
      {/* =========================
             MODAL ORÇAMENTO
      ======================== */}

      <section>
        <SectionOrcamento
          modal={modal}
          setModal={setModal}
        />
      </section>
    </>
  )
}

export default Footer