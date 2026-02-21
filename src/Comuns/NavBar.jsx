import { useState, useEffect, useCallback } from 'react'
import '../styles/header.css'
import logo from '../../public/LOGO.svg'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'
import { Link, useLocation } from 'react-router-dom'

function Header() {
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

  return (
    <header className={`header ${showHeader ? 'show' : 'hide'}`}>
      <div className="header-container">
        <Link to="home">
          <div className="logo">
            <img src={logo} alt="Gusta Websites" />
          </div>
        </Link>

        <ThemeToggle />

        {/* ✅ MENU DESKTOP */}
        <nav className="nav-desktop">
          <ul>
            <li>
              <Link to="servicos">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="portfolio">
                Portfólio
              </Link>
            </li>
            <li>
              <Link to="planos">
                Planos
              </Link>
            </li>
            <li>
              <Link to="faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="contato">
                Contato
              </Link>
            </li>
            <li>
              <Link
                to="contato"
                className="button1"
              >
                Orçamento
              </Link>
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
            <Link to="servicos" onClick={closeMenu}>
              Serviços
            </Link>
          </li>
          <li>
            <Link to="portfolio" onClick={closeMenu}>
              Portfólio
            </Link>
          </li>
          <li>
            <Link to="planos" onClick={closeMenu}>
              Planos
            </Link>
          </li>
          <li>
            <Link to="faq" onClick={closeMenu}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="contato" onClick={closeMenu}>
              Contato
            </Link>
          </li>
          <li>
            <Link
              to="contato"
              className="button1"
              onClick={closeMenu}
            >
              Orçamento
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
