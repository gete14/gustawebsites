import '../../styles/home.css'

import eu from '../../img/eu-v8.png'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

function Section1({ setModal }) {
    const [ativo, setAtivo] = useState(false);
    return (
        <>
            <div className="section1">
                <div className="container-text">
                    <div className="text">
                        <h1 className='Título-principal-section1'>
                            Tenha um site profissional
                            que realmente <span className='Título-principal negocio'>atrai clientes </span>para o seu negócio
                        </h1>
                        <span className='Subtítulos-section1'>Crio sites modernos, rápidos e estratégicos para você se destacar, gerar mais confiança e vender mais no digital.</span>
                    </div>
                    <div className="buttons-section1">

                        <div className="button-1">
                            <Link to="/portfolio">
                                <button className='button1'>ver portfólio</button>
                            </Link>
                        </div>
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
                </div>


            </div>

        </>
    )
}

export default Section1
