import '../../../styles/hero.css'

import eu from '../../../assets/images/eu-v9.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MdOutlineInsights } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";


function Section1({ setModal }) {
    const [ativo, setAtivo] = useState(false);

    const textoAnimado = "VISITANTES EM CLIENTES";
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

    return (
        <>
            <div className="section1" id='section-hero'>
                <div className="container-text">
                    <div className="text">
                        <h1 className="Título-principal-section1">
                            sites profissionais
                            que TRANSFORMAM <br />

                            <span className="Título-principal negocio">
                                {textoDigitado}
                                <span className="cursor">|</span>
                            </span>
                        </h1>
                        <span className='Subtítulos-section1'>Crio sites modernos, rápidos e estratégicos para você se destacar, gerar mais confiança e vender mais no digital.</span>
                    </div>

                    <div className="container-icons-hero">
                        <div className="card-icon-hero">
                            <div className="icon-hero">
                                <IoShieldCheckmarkSharp className='icon-hero-up' />
                            </div>
                            <div className="text-icon-hero">
                                <span className='tittle-icon'>Design Profissional</span>
                                <span>sites que convertem</span>
                            </div>
                        </div>
                        <div className="card-icon-hero">
                            <div className="icon-hero">
                                <AiOutlineThunderbolt className='icon-hero-up' />
                            </div>
                            <div className="text-icon-hero">
                                <span className='tittle-icon'>Rápido e Seguro</span>
                                <span>sites que convertem</span>
                            </div>
                        </div>
                        <div className="card-icon-hero">
                            <div className="icon-hero">
                                <MdOutlineInsights className='icon-hero-up' />
                            </div>
                            <div className="text-icon-hero">
                                <span className='tittle-icon'>Focado em Resultados</span>
                                <span>sites que convertem</span>
                            </div>
                        </div>
                    </div>

                    <div className="buttons-section1">

                        <div className="button-1">

                            <button className='button1'
                                onClick={() => {
                                    setModal(true);
                                }}>QUERO CRIAR MEU SITE</button>
                        </div>

                        <div className="button-2">
                            <Link to="/portfolio">
                                <button className='button2'
                                >Ver Portfólio <FaArrowRight /></button>
                            </Link>
                        </div>




                    </div>

                </div>
                <div className="container-img">
                    <img src={eu} alt="eu" />
                </div>


            </div >

        </>
    )
}

export default Section1
