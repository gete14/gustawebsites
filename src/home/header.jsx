import { useState, useEffect } from 'react'
import '../styles/pages-acima-1024/header.css'
import '../styles/responsividade-481-1024/header.css'
import '../styles/responsividade-480/header.css'
import logo from '../../public/icon-gustawebsites.svg'
import { BsWhatsapp } from "react-icons/bs"
import { HiOutlineMenu, HiX } from "react-icons/hi"

function Header() {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false)
    } else {
      setShowHeader(true)
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlHeader)
    return () => window.removeEventListener('scroll', controlHeader)
  }, [lastScrollY])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      {/* Overlay com blur ao abrir o menu */}
      {menuOpen && (
        <div
          className="menu-overlay active"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Botão do menu hamburguer */}
      <div
        className={`menu-mobile ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <HiX className="icon-menu" />
        ) : (
          <HiOutlineMenu className="icon-menu" />
        )}
      </div>

      {/* Menu lateral mobile */}
      {menuOpen && (
        <div className="menu-open">
          <ul>
            <li><a href="#Solucoes" onClick={handleLinkClick}>Soluções</a></li>
            <li><a href="#Portifolio" onClick={handleLinkClick}>Portifólio</a></li>
            <li><a href="#Etapas" onClick={handleLinkClick}>Etapas</a></li>
            <li><a href="#Investimento" onClick={handleLinkClick}>Investimento</a></li>
            <li><a href="#Sobre-mim" onClick={handleLinkClick}>Sobre mim</a></li>
            <li><a href="#FAQ" onClick={handleLinkClick}>FAQ</a></li>
          </ul>
        </div>
      )}

      {/* Header desktop */}
      <header className={`container-header ${showHeader ? 'show' : 'hide'}`}>
        <div className="container-logo">
          <img src={logo} alt="Logo GustaWebsites" className='logo' />
        </div>

        <div className="container-nav">
          <nav>
            <ul>
              <li><a href="#Solucoes">Soluções</a></li>
              <li><a href="#Portifolio">Portifólio</a></li>
              <li><a href="#Etapas">Etapas</a></li>
              <li><a href="#Investimento">Investimento</a></li>
              <li><a href="#Sobre-mim">Sobre mim</a></li>
              <li><a href="#FAQ">FAQ</a></li>
            </ul>
          </nav>
        </div>

        {/* Ícone de WhatsApp opcional */}
        {/* 
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon"
        >
          <BsWhatsapp />
        </a> 
        */}
      </header>
    </>
  )
}

export default Header
