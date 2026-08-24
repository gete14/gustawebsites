import '../../../styles/carrosselportfolio.css'

import { useState } from "react";
import { Link } from 'react-router-dom'

import foto1 from '../../../assets/images/foto-projeto1.png'
import foto2 from '../../../assets/images/foto-projeto2.png'
import foto3 from '../../../assets/images/foto-projeto3.png'

import { FaArrowRight } from "react-icons/fa6";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";


function SectionCarrossel() {

    const [projetoSelecionado, setProjetoSelecionado] = useState(null);

    const servicos = [
        {
            Foto: foto1,
            titulo: "EM INTERIORES",
            descricao: "Site institucional para empresa de design de interiores",

            descricaoModal:
                "Um site institucional desenvolvido para transmitir sofisticação, confiança e profissionalismo para uma empresa de design de interiores.",

            tecnologias: [
                "Design responsivo",
                "React",
                "Performance otimizada",
                "Integração com WhatsApp"
            ],

            link: "https://eminteriores.com.br"
        },

        {
            Foto: foto2,
            titulo: "MOONRUCHI",
            descricao: "Site para produtora de audiovisual",

            descricaoModal:
                "Um site desenvolvido para apresentar os trabalhos da produtora de forma visual, moderna e estratégica.",

            tecnologias: [
                "Design responsivo",
                "React",
                "Galeria de projetos",
                "Otimização de performance"
            ],

            link: "none"
        },

        {
            Foto: foto3,
            titulo: "BARBER 21",
            descricao: "Landing page para barbearia premium",

            descricaoModal:
                "Landing page criada para uma barbearia premium, com foco em apresentação da marca, serviços e conversão de visitantes em clientes.",

            tecnologias: [
                "Design responsivo",
                "Landing Page",
                "Integração com WhatsApp",
                "Foco em conversão"
            ],

            link: "none"
        }
    ];


    return (
        <>
            <section className='servicos' id='section-portfolio'>

                <div className="tittle-section" id='servicos'>
                    <h1 className="tittle">PORTFÓLIO</h1>

                    <h1>
                        Projetos pensados para cada negócio
                    </h1>
                </div>


                <div className="container-cards">

                    {servicos.map((servico, index) => (

                        <div
                            className="card-servico"
                            key={index}
                        >

                            <div className="card-image">
                                <img
                                    src={servico.Foto}
                                    alt={servico.titulo}
                                />
                            </div>


                            <div className="container-bottom">

                                <div className="info-text-card">

                                    <h3 className="titulo-card">
                                        {servico.titulo}
                                    </h3>

                                    <p className="descricao-card">
                                        {servico.descricao}
                                    </p>

                                </div>


                                <div className="button-2">

                                    <button
                                        className='button2 card-btn'
                                        onClick={() => setProjetoSelecionado(servico)}
                                    >
                                        Ver
                                        <FaArrowRight />
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>


                <Link to="/portfolio">

                    <div className="button-2">

                        <button className='button2 card-btn'>
                            Ver todos os projetos
                        </button>

                    </div>

                </Link>

            </section>


            {/* ============================= */}
            {/* MODAL DO PROJETO */}
            {/* ============================= */}

            {projetoSelecionado && (

                <div
                    className="portfolio-modal-overlay"
                    onClick={() => setProjetoSelecionado(null)}
                >

                    <div
                        className="portfolio-modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* BOTÃO FECHAR */}

                        <button
                            className="portfolio-modal-close"
                            onClick={() => setProjetoSelecionado(null)}
                            aria-label="Fechar"
                        >
                            <FaTimes />
                        </button>


                        {/* IMAGEM */}

                        <div className="portfolio-modal-image">

                            <img
                                src={projetoSelecionado.Foto}
                                alt={projetoSelecionado.titulo}
                            />

                        </div>


                        {/* CONTEÚDO */}

                        <div className="portfolio-modal-content">

                            <span className="portfolio-modal-label">
                                PROJETO
                            </span>

                            <h2>
                                {projetoSelecionado.titulo}
                            </h2>

                            <p className="portfolio-modal-description">
                                {projetoSelecionado.descricaoModal}
                            </p>


                            {/* CARACTERÍSTICAS */}

                            <div className="portfolio-modal-features">

                                {projetoSelecionado.tecnologias.map(
                                    (tecnologia, index) => (

                                        <span key={index}>
                                            ✓ {tecnologia}
                                        </span>

                                    )
                                )}

                            </div>


                            {/* BOTÃO SITE */}

                            {projetoSelecionado.link && projetoSelecionado.link !== "none" && (
                                <a
                                    href={projetoSelecionado.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-modal-link"
                                >
                                    Visitar site
                                    <FaExternalLinkAlt />
                                </a>
                            )}

                        </div>

                    </div>

                </div>

            )}

        </>
    )
}

export default SectionCarrossel