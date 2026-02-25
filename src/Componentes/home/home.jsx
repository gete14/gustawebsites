import '../../styles/home.css'

import eu from '../../img/eu-v6.png'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

function Section1() {
    const [ativo, setAtivo] = useState(false);
    return (
        <>
            <div className="section1">
                <div className="container-text">
                    <div className="text">
                        <h1 className='Título-principal-section1'>
                            NÃO IMPORTA <br /> O NICHO DO SEU <span className='Título-principal negocio'>NEGÓCIO</span>
                        </h1>
                        <span className='Subtítulos-section1'>Eu crio sites modernos, rapidos e responsivos para o seu negocio se destacar online.</span>
                    </div>
                    <div className="buttons-section1">

                        <div className="button-1">
                            <Link to="/portfolio">
                                <button className='button1'>Ver Portifólio</button>
                            </Link>
                        </div>


                        <Link to="/orcamento">
                            <div className="borda-button-2">
                                <div className="button-2">
                                    <button className='button2'>Fale Comigo</button>
                                </div>
                            </div>
                        </Link>


                    </div>

                </div>
                <div className="container-img">
                    <div className={`img-wrapper ${ativo ? "ativo" : ""}`}>
                        <img src={eu} alt="eu" />

                        {/* Botão inferior */}
                        <div
                            className="btn-sobre"
                            onClick={() => setAtivo(!ativo)}
                        >
                            <span>Sobre mim</span>
                            {ativo ? <FiChevronDown size={18} /> : <FiChevronUp size={18} />}
                        </div>

                        {/* Overlay */}
                        <div className="info-overlay">
                            <p>
                                Desenvolvedor web especializado em criar soluções digitais
                                personalizadas que impulsionam negócios e marcas.
                                Combinando design criativo e tecnologia de ponta para
                                resultados excepcionais.
                            </p>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Section1
