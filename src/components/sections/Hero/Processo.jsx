import '../../../styles/processo.css'

import { useState } from "react";

import { FaClipboardCheck } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";




function SectionProcesso() {

    const [ativo, setAtivo] = useState(null);
    const toggleCard = (index) => {
        setAtivo(ativo === index ? null : index);
    };
    const servicos = [
        {
            Icone: <FaClipboardCheck />,
            Number: "01",
            titulo: "Briefing",
            descricao: "Entendemos seu negócio, público e objetivos."
        },
        {
            Icone: <IoCalendar />,
            Number: "02",
            titulo: "Planejamento",
            descricao: "Definimos estrutura, conteúdo e estratégia do site."
        },
        {
            Icone: <FaCode />,
            Number: "03",
            titulo: "Desenvolvimento",
            descricao: "Transformamos o planejamento em um site rápido e responsivo."
        },
        {
            Icone: <IoRocket />,
            Number: "04",
            titulo: "Entrega e Suporte",
            descricao: "Publicamos seu site e acompanhamos você após o lançamento."
        }

    ]

    return (
        <>
            <section className='container-processo'>
                <div className="tittle-section" id='processo'>
                    <h1 className="tittle">NOSSO PROCESSO</h1>
                    <h1>
                        Simples, estratégico e eficiente</h1>
                </div>

                <div className="container-cards">
                    {servicos.map((servico, index) => (
                        <div
                            className={`card-processo ${ativo === index ? "ativo" : ""}`}
                            key={index}
                            onClick={() => toggleCard(index)}>

                            <div className="card-icone">
                                <span>{servico.Icone}</span>
                                <h3 className="processo-titulo-card">{servico.titulo}</h3>
                                <p className="processo-descricao-card">{servico.descricao}</p>
                                <span className="processo-number">{servico.Number}</span>
                            </div>
                        </div>

                    ))}
                </div>
            </section>
        </>
    )
}

export default SectionProcesso