import '../../../styles/sobremim.css'
import eu from '../../../assets/images/eu-v8.png'
import coroa from '../../../assets/logos/LOGO_COROA.svg'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { BiSolidConversation } from "react-icons/bi";




function SobreMim({ setModal }) {

    const topicos = [
        {
            titulo: "Sites rápidos e responsivos",
        },
        {
            titulo: "Design personalizado",
        },
        {
            titulo: "Estratégia focada no negócio",
        },
        {
            titulo: "Suporte após a entrega",
        }

    ]

    const skills = [
        {
            icone: <IoIosRocket />,
            text: "Sites",
            subtext: "100% Responsivos"
        },
        {
            icone: <MdOutlineWeb />,
            text: "Foco",
            subtext: "em Resultados"
        },
        {
            icone: <IoShieldCheckmarkSharp />,
            text: "Suporte",
            subtext: "Contínuo"
        },
        {
            icone: <BiSolidConversation />,
            text: "Atendimento",
            subtext: "Personalizados"
        }
    ]

    const textoAnimado = "GUSTAVO ROBSON";
    const [textoDigitado, setTextoDigitado] = useState("");
    const [apagando, setApagando] = useState(false);

    useEffect(() => {
        let timeout;

        if (!apagando && textoDigitado.length < textoAnimado.length) {
            // Digitando
            timeout = setTimeout(() => {
                setTextoDigitado(
                    textoAnimado.slice(0, textoDigitado.length + 1)
                );
            }, 100);
        }
        else if (!apagando && textoDigitado.length === textoAnimado.length) {
            // Espera quando termina de digitar
            timeout = setTimeout(() => {
                setApagando(true);
            }, 1800);
        }
        else if (apagando && textoDigitado.length > 0) {
            // Apagando
            timeout = setTimeout(() => {
                setTextoDigitado(
                    textoAnimado.slice(0, textoDigitado.length - 1)
                );
            }, 50);
        }
        else if (apagando && textoDigitado.length === 0) {
            // Começa novamente
            timeout = setTimeout(() => {
                setApagando(false);
            }, 500);
        }

        return () => clearTimeout(timeout);
    }, [textoDigitado, apagando]);


    const mensagemWhatsApp = encodeURIComponent(
        `Olá, Gustavo! 

Encontrei a Gusta Websites pelo site e gostaria de solicitar um orçamento para criar um site profissional para minha empresa.

Gostaria de saber mais sobre os projetos e como funciona o processo.`
    )

    return (
        <>
            <div className="section-sobre" id='section-sobre'>
                <div className="container-text">
                    <div className="text">
                        <h1 className="tittle-sobre">Sobre mim</h1>
                        <h1 className="Título-principal-sobre">
                            Prazer, sou <br />

                            <span className="Título-principal negocio">
                                {textoDigitado}
                                <span className="cursor">|</span>
                            </span>
                        </h1>
                        <span className='Subtítulos-section1'>
                            Desenvolvedor web especializado em criar sites que unem design, performance e estratégia.
                        </span>
                    </div>
                    <div className="list-topicos">
                        {topicos.map((topico, index) => (
                            <div className="item-topico-text" key={index}>
                                <img
                                    src={coroa}
                                    alt=""
                                    className="icone-topico"
                                />
                                <span>{topico.titulo}</span>
                            </div>
                        ))}
                    </div>
                    <div className="buttons-section1">

                        <div className="button-3">

                            <button className='button3'
                                onClick={() => {
                                    setModal(true);
                                }}><MdWhatsapp />Fale comigo</button>
                        </div>

                        <div className="button-1">
                            <Link to="/portfolio">
                                <button className='button1 border-azul'
                                >Ver Portfólio </button>
                            </Link>
                        </div>
                    </div>

                </div >
                <div className="container-img">
                    <img src={eu} alt="eu" />

                    {/* CARD WHATSAPP */}
                    <div
                        className="card-social whatsapp"
                        onClick={() =>  window.open(
            `https://wa.me/5511915079401?text=${mensagemWhatsApp}`,
            "_blank"
        )}
                    >
                        <i className="fab fa-whatsapp">
                            <FaWhatsapp />
                        </i>

                        <div>
                            <strong>WhatsApp</strong>
                            <span>+55 11 91507-9401</span>
                        </div>
                    </div>

                    {/* CARD INSTAGRAM */}
                    <div
                        className="card-social instagram"
                        onClick={() => window.open("https://instagram.com/gustawebsites", "_blank")}
                    >
                        <i className="fab fa-instagram">
                            <FaInstagram />
                        </i>

                        <div>
                            <strong>Instagram</strong>
                            <span>@gustawebsites</span>
                        </div>
                    </div>
                    <div className="list-skills">
                        {skills.map((skill, index) => (
                            <div className="item-skills-text" key={index}>
                                <span className="icone-skills">
                                    {skill.icone}
                                </span>

                                <span className="text-skills">
                                    {skill.text}
                                </span>

                                <span className="subtitulo-skills">
                                    {skill.subtext}
                                </span>
                            </div>
                        ))}
                    </div>




                </div>

            </div >

        </>
    )
}

export default SobreMim
