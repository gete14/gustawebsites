import { useState, useEffect, useCallback } from 'react'
import '../styles/header.css'
import logo from '../../public/icon-gustawebsites.svg'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-scroll'


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
    <li>
      <Link
        to="contato"
        smooth
        duration={500}
        offset={-90}
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

      {/* MENU MOBILE */}
      <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
  <ul>
    <li>
      <Link to="servicos" smooth duration={500} offset={-90} onClick={closeMenu}>
        Serviços
      </Link>
    </li>
    <li>
      <Link to="portfolio" smooth duration={500} offset={-90} onClick={closeMenu}>
        Portfólio
      </Link>
    </li>
    <li>
      <Link to="planos" smooth duration={500} offset={-90} onClick={closeMenu}>
        Planos
      </Link>
    </li>
    <li>
      <Link to="faq" smooth duration={500} offset={-90} onClick={closeMenu}>
        FAQ
      </Link>
    </li>
    <li>
      <Link to="contato" smooth duration={500} offset={-90} onClick={closeMenu}>
        Contato
      </Link>
    </li>
    <li>
      <Link
        to="contato"
        smooth
        duration={500}
        offset={-90}
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
