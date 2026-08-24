import '../../../styles/processo.css'

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import { FaCheck } from "react-icons/fa";

import { FaClipboardCheck } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";

import SectionOrcamento from '../../../components/sections/Orcamento/Orcamento.jsx'


function SectionProcesso() {

    const [modal, setModal] = useState(false)

    const [popupAberto, setPopupAberto] = useState(false);

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


    useEffect(() => {
        if (popupAberto) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [popupAberto]);



    const openOrcamento = () => {
        setModal(true)
        closeMenu()
    }

    return (
        <>
            <section className='container-processo' id='section-processo'>
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
                <div className="container-btns-processo">
                    <button
                        className="button3"
                        onClick={() => setPopupAberto(true)}
                    >
                        O que está incluso?
                    </button>
                    <button
                        className='button1'
                        onClick={openOrcamento}
                    >QUERO CRIAR MEU SITE
                    </button>

                </div>


                {popupAberto &&
                    createPortal(
                        <div
                            className="overlay-popup"
                            onClick={() => setPopupAberto(false)}
                        >
                            <div
                                className="popup-processo"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="popup-fechar"
                                    onClick={() => setPopupAberto(false)}
                                >
                                    ×
                                </button>

                                <h2>O que está incluso?</h2>

                                <div className="lista-incluso">

                                    <div className="item-incluso">
                                        <FaCheck />
                                        <div>
                                            <h3>Design personalizado</h3>
                                            <p>
                                                Layout desenvolvido de acordo com sua marca e segmento.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="item-incluso">
                                        <FaCheck />
                                        <div>
                                            <h3>Responsividade</h3>
                                            <p>
                                                Seu site adaptado para celular, tablet e computador.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="item-incluso">
                                        <FaCheck />
                                        <div>
                                            <h3>Otimização de desempenho</h3>
                                            <p>
                                                Estrutura pensada para carregamento rápido.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="item-incluso">
                                        <FaCheck />
                                        <div>
                                            <h3>Integração com WhatsApp</h3>
                                            <p>
                                                Facilite o contato dos seus clientes.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="item-incluso">
                                        <FaCheck />
                                        <div>
                                            <h3>SEO básico</h3>
                                            <p>
                                                Configurações iniciais para melhorar a presença do
                                                site nos mecanismos de busca.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="item-incluso">
                                        <FaCheck />
                                        <div>
                                            <h3>Publicação do site</h3>
                                            <p>
                                                Colocação do projeto no ar.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="item-incluso">
                                        <FaCheck />
                                        <div>
                                            <h3>Suporte após a entrega</h3>
                                            <p>
                                                Auxílio após o lançamento para garantir que tudo
                                                continue funcionando.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>,
                        document.body
                    )
                }
            </section>

            {/* =========================
          MODAL ORÇAMENTO
      ========================= */}

            <section>
                <SectionOrcamento
                    modal={modal}
                    setModal={setModal}
                />
            </section>
        </>
    )
}

export default SectionProcesso