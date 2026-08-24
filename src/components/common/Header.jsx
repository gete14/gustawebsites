import { useState, useEffect, useCallback, useRef } from 'react'
import '../../styles/navbar.css'
import logo from '../../assets/logos/LOGO.svg'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import SectionOrcamento from '../sections/Orcamento/Orcamento.jsx'
import { useLocation } from 'react-router-dom';

function Header() {
  const [modal, setModal] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  // Indica quando o scroll foi iniciado pela navbar
  const isNavigating = useRef(false)

  // =========================
  // CONTROLE DO SCROLL
  // =========================

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY

    setScrolled(currentScroll > 50)

    // Se o scroll foi iniciado por um clique
    // na navbar, não executa a lógica normal
    if (isNavigating.current) {
      return
    }

    // Descendo
    if (currentScroll > lastScrollY && currentScroll > 80) {
      setShowHeader(false)
    }

    // Subindo
    else {
      setShowHeader(true)
    }

    setLastScrollY(currentScroll)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  // =========================
  // MENU
  // =========================

  const toggleMenu = () => {
    setMenuOpen(prev => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  // =========================
  // SCROLL PARA SEÇÃO
  // =========================

  const scrollToSection = (id) => {
    const section = document.getElementById(id)

    if (!section) return

    // Informa que o scroll foi iniciado
    // através da navbar
    isNavigating.current = true

    // Mantém a navbar visível durante o movimento
    setShowHeader(true)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    // Aguarda chegar na seção
    const checkScroll = () => {
      const distance = Math.abs(
        section.getBoundingClientRect().top
      )

      if (distance <= 3) {

        // Terminou a navegação
        isNavigating.current = false

        // Esconde a navbar ao chegar
        setShowHeader(false)

        // Atualiza a posição
        setLastScrollY(window.scrollY)

        return
      }

      requestAnimationFrame(checkScroll)
    }

    requestAnimationFrame(checkScroll)

    closeMenu()
  }

  // =========================
  // ABRIR ORÇAMENTO
  // =========================

  const openOrcamento = () => {
    setModal(true)
    closeMenu()
  }


  const location = useLocation();

  const navbarComBackground = location.pathname === '/portfolio';


  return (
    <>
      <header
        className={`header 
    ${showHeader ? 'show' : 'hide'}
    ${scrolled ? 'scrolled' : ''}
    ${navbarComBackground ? 'page-background' : ''}
  `}
      >

        <div className="header-container">

          {/* LOGO */}

          <Link to="/">
            <div className="logo"
              onClick={() =>
                scrollToSection('section-hero')
              }>
              <img
                src={logo}
                alt="Gusta Websites"
              />
            </div>
          </Link>


          {/* =========================
              MENU DESKTOP
          ========================= */}

          <nav className="nav-desktop">

            <ul>

              {/* INÍCIO */}

              <Link to="/">
                <li>
                  <button
                    className="nav-link"
                    onClick={() =>
                      scrollToSection('section-hero')
                    }
                  >
                    Início
                  </button>
                </li>
              </Link>


              {/* SOBRE */}
              <Link to="/">
                <li>
                  <button
                    className="nav-link"
                    onClick={() =>
                      scrollToSection('section-sobre')
                    }
                  >
                    Sobre
                  </button>
                </li>
              </Link>

              {/* PORTFÓLIO */}
              <Link to="/">
                <li>
                  <button
                    className="nav-link"
                    onClick={() =>
                      scrollToSection('section-portfolio')
                    }
                  >
                    Portfólio
                  </button>
                </li>
              </Link>

              {/* PROCESSO */}
              <Link to="/">
                <li>
                  <button
                    className="nav-link"
                    onClick={() =>
                      scrollToSection('section-processo')
                    }
                  >
                    Processo
                  </button>
                </li>
              </Link>

              {/* FAQ */}
              <Link to="/">
                <li>
                  <button
                    className="nav-link"
                    onClick={() =>
                      scrollToSection('section-faq')
                    }
                  >
                    FAQ
                  </button>
                </li>
              </Link>

              {/* ORÇAMENTO */}

              <li>

                <button
                  className="button1"
                  onClick={openOrcamento}
                >
                  Solicitar Orçamento
                </button>

              </li>

            </ul>

          </nav>


          {/* =========================
              MENU MOBILE ICON
          ========================= */}

          <div
            className="menu-icon"
            onClick={toggleMenu}
          >
            {menuOpen
              ? <HiX />
              : <HiOutlineMenu />
            }
          </div>

        </div>


        {/* =========================
            MENU MOBILE
        ========================= */}

        <nav
          className={`nav-mobile ${menuOpen ? 'open' : ''
            }`}
        >

          <ul>

            {/* INÍCIO */}

            <li>
              <button
                className="nav-link"
                onClick={() =>
                  scrollToSection('section-hero')
                }
              >
                Início
              </button>
            </li>


            {/* SOBRE */}

            <li>
              <button
                className="nav-link"
                onClick={() =>
                  scrollToSection('section-sobre')
                }
              >
                Sobre
              </button>
            </li>


            {/* PORTFÓLIO */}

            <li>
              <button
                className="nav-link"
                onClick={() =>
                  scrollToSection('section-portfolio')
                }
              >
                Portfólio
              </button>
            </li>


            {/* PROCESSO */}

            <li>
              <button
                className="nav-link"
                onClick={() =>
                  scrollToSection('section-processo')
                }
              >
                Processo
              </button>
            </li>


            {/* FAQ */}

            <li>
              <button
                className="nav-link"
                onClick={() =>
                  scrollToSection('section-faq')
                }
              >
                FAQ
              </button>
            </li>


            {/* ORÇAMENTO */}

            <li>

              <button
                className="button1"
                onClick={openOrcamento}
              >
                Solicitar Orçamento
              </button>

            </li>

          </ul>

        </nav>

      </header>


      {/* =========================
          MODAL ORÇAMENTO
      ========================= */}

      <section>
        <SectionOrcamento
          modal={modal}
          setModal={setModal}
        />
      </section>

    </>
  )
}

export default Header