import { useState, useEffect, useCallback } from 'react'
import '../styles/navbar.css'
import logo from '../../public/LOGO.svg'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'
import { Link, useLocation } from 'react-router-dom'
import SectionOrcamento from '../Componentes/Orcamento/orcamento.jsx'

function Header() {
  const [modal, setModal] = useState(false);
  const [showHeader, setShowHeader] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY

    if (currentScroll > lastScrollY && currentScroll > 80) {
      setShowHeader(false)
    } else {
      setShowHeader(true)
    }

    setLastScrollY(currentScroll)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu = () => setMenuOpen(false)

  const location = useLocation()
  if (location.pathname === "/") return null

  const isActive = (path) => location.pathname === path

  return (
    <>
    <header className={`header ${showHeader ? 'show' : 'hide'}`}>
      <div className="header-container">
        <Link to="home">
          <div className="logo">
            <img src={logo} alt="Gusta Websites" />
            
          </div>
        </Link>
        <div className="container-theme">
          <ThemeToggle />
        </div>

        

        {/* ✅ MENU DESKTOP */}
        <nav className="nav-desktop">
          <ul>
            <ul>
              <li>
                <Link to="/home" className={isActive('/home') ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className={isActive('/portfolio') ? 'active' : ''}>
                  Portfólio
                </Link>
              </li>

              <li>
                <Link to="/faq" className={isActive('/faq') ? 'active' : ''}>
                  FAQ
                </Link>
              </li>
            </ul>
            <li>
              <div className="button-1">
                
                  <button className='button1' onClick={() => setModal(true)}>
                    Orçamento
                  </button>
                
              </div>
            </li>
          </ul>
        </nav>

        {/* MENU MOBILE ICON */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </div>
      </div>

      {/* ✅ MENU MOBILE */}
      <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="servicos" className={isActive('/servicos') ? 'active' : ''}  onClick={closeMenu}>
              Serviços
            </Link>
          </li>
          <li>
            <Link to="portfolio" className={isActive('/portfolio') ? 'active' : ''} onClick={closeMenu}>
              Portfólio
            </Link>
          </li>
          {/*<li>
            <Link to="planos" onClick={closeMenu}>
              Planos
            </Link>
          </li>*/}
          <li>
            <Link to="faq" className={isActive('/faq') ? 'active' : ''} onClick={closeMenu}>
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="orcamento"
              className="button1"
              onClick={closeMenu}
            >
              Orçamento
            </Link>
          </li>
        </ul>
      </nav>
      
    </header>
    <section>
      <SectionOrcamento modal={modal} setModal={setModal} />
    </section>
    </>
  )
}

export default Header
