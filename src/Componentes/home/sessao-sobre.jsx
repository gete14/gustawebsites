import '../../styles/sobremim.css'

import eu from '../../img/eu-v8.png'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function SobreMim({ setModal }) {
    return (
        <>
            <div className="section1">
                <div className="container-text">
                    <div className="text">
                        <h1 className='Título-principal-section1'>
                            QUem é <span className='Título-principal negocio'>Gustavo Robson </span>
                        </h1>
                        <span className='Subtítulos-section1'>Gustavo é desenvolvedor de software e atua na criação de sites modernos e soluções digitais para negócios que desejam se destacar no ambiente online.
                            Com experiência em front-end e back-end, ele desenvolve projetos que unem design clean, performance e uma ótima experiência para o usuário.
                            Atualmente, continua aprimorando suas habilidades em Desenvolvimento de Software Multiplataformas, sempre buscando evoluir e entregar soluções cada vez mais eficientes.
                            Seu objetivo é ajudar empresas a crescerem através de presença digital profissional, transformando ideias em projetos reais e de alto impacto.</span>
                    </div>
                    <div className="buttons-section1">
                        <div className="borda-button-2">
                            <div className="button-2">
                                <button className='button2'
                                    onClick={() => {
                                        setModal(true);
                                    }}>Quero meu site</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container-img">
                    <img src={eu} alt="eu" />

                    {/* CARD WHATSAPP */}
                    <div className="card-social whatsapp">
                        <i className="fab fa-whatsapp"><FaWhatsapp /></i>
                        <div>
                            <strong>WhatsApp</strong>
                            <span>+55 11 91507-9401</span>
                        </div>
                    </div>

                    {/* CARD INSTAGRAM */}
                    <div className="card-social instagram">
                        <i className="fab fa-instagram"><FaInstagram /></i>
                        <div>
                            <strong>Instagram</strong>
                            <span>@gustawebsites</span>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default SobreMim
