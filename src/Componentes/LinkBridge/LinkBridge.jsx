import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaGlobe,
  FaBriefcase,
  FaWpforms,
  FaEnvelope,
  FaQuestion ,
  FaLaptopCode,
  FaFontAwesome,
} from "react-icons/fa";


import { Link } from "react-router-dom";
import fundo from "../../img/fundo-linkbridge.png";
import heroImg from "../../img/eu-v6.png";
import logo from "../../../public/LOGO.svg";

import "../../styles/linkbridge.css";

export default function LinkBridge() {
  const phone = "5511915079401";
  const message = "Olá, vim pelo seu site e gostaria de mais informações!";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

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
             <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
            <p>Soluções verdadeiras para o seu negócio!</p>
          </div>

          <div className="main-links">
            <Link to="/home" className="link-btn">
              <FaGlobe /> Site
            </Link>

            <Link to="/portfolio" className="link-btn">
              <FaBriefcase /> Portfólio
            </Link>

            <Link to="/orcamento" className="link-btn">
              <FaWpforms /> Formulário
            </Link>
            <Link to="/planos" className="link-btn">
              <FaLaptopCode /> Planos
            </Link>
            <Link to="/faq" className="link-btn">
              <FaQuestion  /> FAQ
            </Link>
            <Link to="/servicos" className="link-btn">
              <FaEnvelope /> Serviços
            </Link>
            

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn whatsapp"
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

        {/* 🔥 LADO DIREITO (SUA FOTO) */}
        <div className="right-side">
          <img src={heroImg} alt="Gustavo desenvolvedor web" />
        </div>
      </div>
    </section>
  );
}
