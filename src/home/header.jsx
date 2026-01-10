import { useState, useEffect, useCallback } from 'react'
import '../styles/header.css'
import logo from '../../public/icon-gustawebsites.svg'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'

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

  return (
    <header className={`header ${showHeader ? 'show' : 'hide'}`}>
      <div className="header-container">
        
        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="Gusta Websites" />
        </div>
        <ThemeToggle />

        {/* MENU DESKTOP */}
        <nav className="nav-desktop">
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#planos">Planos</a>
          <a href="#faq">FAQ</a>
          <a href="#contato">Contato</a>
          <a href="#contato" className="btn-orcamento">
            Orçamento
          </a>
        </nav>

        {/* MENU MOBILE ICON */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiOutlineMenu />}
        </div>
      </div>

      {/* MENU MOBILE */}
      <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        <a href="#servicos" onClick={closeMenu}>Serviços</a>
        <a href="#portfolio" onClick={closeMenu}>Portfólio</a>
        <a href="#planos" onClick={closeMenu}>Planos</a>
        <a href="#faq" onClick={closeMenu}>FAQ</a>
        <a href="#contato" onClick={closeMenu}>Contato</a>
        <a href="#contato" className="btn-orcamento" onClick={closeMenu}>
          Orçamento
        </a>
      </nav>
    </header>
  )
}

export default Header
