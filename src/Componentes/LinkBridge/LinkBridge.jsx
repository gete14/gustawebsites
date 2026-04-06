import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaGlobe,
  FaBriefcase,
  FaWpforms,
  FaEnvelope,
  FaQuestion,
} from "react-icons/fa";


import { Link } from "react-router-dom";
import fundo from "../../img/fundo-linkbridge1.png";
import logo from "../../../public/LOGO.svg";


import "../../styles/linkbridge.css";

export default function LinkBridge() {
  const phone = "5511915079401";
  const message = "Olá, vim pelo seu site e gostaria de mais informações!";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroDone(true);
    }, 2000); // tempo total da animação

    return () => clearTimeout(timer);
  }, []);
  return (
    <section
      className="linkbridge"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <div className="overlay" />

      <div className="content">

        {/* 🔥 LADO ESQUERDO */}
        <div className="left-side">

          <div className="header-text">

            {/* LOGO REAL (fica no layout) */}
            <div className={`logo-header ${introDone ? "show" : ""}`}>
              <img src={logo} alt="Logo" />
              <p>Soluções verdadeiras para o seu negócio!</p>
            </div>

            {/* LOGO INTRO (animação) */}
            {!introDone && (
              <div className="logo-intro">
                <img src={logo} alt="Logo" />
              </div>
            )}

            
          </div>



          <div className={`main-links ${introDone ? "show" : ""}`}>

            <Link to="/home" className="link-btn">
              <FaGlobe /> Site
            </Link>

            <Link to="/portfolio" className="link-btn">
              <FaBriefcase /> Portfólio
            </Link>

            <Link to="/home" className="link-btn">
              <FaWpforms /> Formulário
            </Link>
            {/*<Link to="/planos" className="link-btn">
              <FaLaptopCode /> Planos
            </Link>*/}
            <Link to="/faq" className="link-btn">
              <FaQuestion /> FAQ
            </Link>
            <Link to="/home" className="link-btn">
              <FaEnvelope /> Serviços
            </Link>


            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn whatsapp-linkbridge"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            {/* redes sociais */}
            <div className="social-links">
              <a
                href="https://instagram.com/gustawebsites"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="icon-instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="social-links">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="icon-whatsapp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
