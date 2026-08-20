import '../../../styles/carrosselportfolio.css'

import { useState } from "react";

import foto1 from '../../../assets/images/foto-carrossel-1.png'
import foto2 from '../../../assets/images/foto-carrossel-2.png'
import foto3 from '../../../assets/images/foto-carrossel-3.png'

import { FaArrowRight } from "react-icons/fa6";


function SectionCarrossel() {

    const [ativo, setAtivo] = useState(null);
    const toggleCard = (index) => {
        setAtivo(ativo === index ? null : index);
    };
    const servicos = [
        {
            Foto: foto1,
            titulo: "EM INTERIORES",
            descricao: "Site institucional para empresa de design de interiores"
        },
        {
            Foto: foto2,
            titulo: "MOONRUCHI",
            descricao: "Site para produtora de audiovisual"
        },
        {
            Foto: foto3,
            titulo: "BARBER 21",
            descricao: "Landing page para barbearia premium"
        }

    ]

    return (
        <>
            <section className='servicos'>
                <div className="tittle-section" id='servicos'>
                    <h1 className="tittle">PORTFÓLIO</h1>
                    <h1>
                        Projetos pensados para cada negócio
                    </h1>
                </div>

                <div className="container-cards">
                    {servicos.map((servico, index) => (
                        <div
                            className={`card-servico ${ativo === index ? "ativo" : ""}`}
                            key={index}
                            onClick={() => toggleCard(index)}>

                            <div className="card-image">
                                <img src={servico.Foto} alt={servico.titulo} />

                            </div>
                            <div className="container-bottom">
                                <div className="info-text-card">
                                    <h3 className="titulo-card">{servico.titulo}</h3>
                                    <p className="descricao-card">{servico.descricao}</p>
                                </div>
                                <div className="button-2">
                                    <button className='button2 card-btn'
                                    >Ver<FaArrowRight /></button>
                                </div>
                            </div>

                        </div>

                    ))}
                </div>
                <div className="button-2">
                    <button className='button2 card-btn'
                    >Ver todos os projetos</button>
                </div>

            </section>
        </>
    )
}

export default SectionCarrossel