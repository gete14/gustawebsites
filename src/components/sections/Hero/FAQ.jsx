import { useState, useEffect } from "react";
import '../../../styles/faq.css'
import { FiChevronDown } from "react-icons/fi";
import { MdWhatsapp } from "react-icons/md";
import { PiHeadsetFill } from "react-icons/pi";

import SectionOrcamento from '../../sections/Orcamento/Orcamento.jsx'



function Section1() {

    const [modal, setModal] = useState(false)

    const [ativo, setAtivo] = useState(null)

    const faqs = [
        {
            pergunta: 'Quanto tempo leva para desenvolver um site?',
            resposta:
                'O prazo depende do projeto e da quantidade de páginas, mas geralmente um site é desenvolvido entre 7 e 15 dias úteis após o envio de todas as informações e materiais necessários.'
        },
        {
            pergunta: 'Você faz manutenção após o lançamento?',
            resposta:
                'Sim. Oferecemos suporte e manutenção após a publicação, podendo realizar ajustes, correções e atualizações conforme a necessidade do projeto.'
        },
        {
            pergunta: 'Vocês fazem atualizações no site após a entrega?',
            resposta:
                'Sim. Podemos realizar alterações de textos, imagens, informações, páginas e outros elementos do site. Os valores podem variar de acordo com a complexidade da alteração.'
        },
        {
            pergunta: 'Posso usar meu próprio domínio e hospedagem?',
            resposta:
                'Sim. Você pode utilizar seu próprio domínio e hospedagem. Também podemos orientar você na configuração e publicação do site.'
        },
        {
            pergunta: 'Tem como parcelar?',
            resposta:
                'Sim. As formas de pagamento e a possibilidade de parcelamento são definidas de acordo com o projeto e o orçamento contratado.'
        },
        {
            pergunta: 'Quanto custa um site?',
            resposta:
                'O valor depende das características de cada projeto, como quantidade de páginas, funcionalidades, nível de personalização e recursos necessários. Solicite um orçamento para receber uma proposta personalizada.'
        },
        {
            pergunta: 'O site funciona no celular?',
            resposta:
                'Sim. Todos os sites são desenvolvidos com design responsivo, adaptando-se perfeitamente a celulares, tablets, notebooks e computadores.'
        },
        {
            pergunta: 'Vocês fazem o cadastro no Google?',
            resposta:
                'Sim. Podemos realizar a configuração básica para presença no Google, incluindo orientações e otimizações iniciais de SEO. Serviços específicos de posicionamento podem ser contratados separadamente.'
        },
        {
            pergunta: 'Eu preciso fornecer os textos e imagens?',
            resposta:
                'Não necessariamente. Você pode fornecer seus próprios textos e imagens ou podemos orientar e auxiliar na criação e organização do conteúdo necessário para o site. A produção de materiais específicos pode ser incluída no orçamento conforme a necessidade.'
        },

    ]

    const toggleFaq = (index) => {
        setAtivo(ativo === index ? null : index)
    }


    const openOrcamento = () => {
        setModal(true)

    }

    return (
        <>
            <section className="section-faq" id='section-faq'>
                <div className="faq-header">
                    <h1>FAQ</h1>
                    <p>
                        Dúvidas frequentes.
                    </p>
                </div>

                <div className="faq-container">
                    <div className="container-perguntas">
                        {faqs.map((item, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={ativo === index}
                                    aria-controls={`faq-resposta-${index}`}
                                    className="faq-pergunta"
                                >
                                    <span>{item.pergunta}</span>
                                    <span className="seta" aria-hidden="true">
                                        <FiChevronDown size={22} />
                                    </span>
                                </button>

                                {ativo === index && (
                                    <div id={`faq-resposta-${index}`} className="faq-resposta">
                                        <p>{item.resposta}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="container-contact">
                        <PiHeadsetFill size={150} />
                        <div className="text-and-button">
                            <span>
                                Pronto para levar sua empresa para o próximo nível?
                            </span>
                            <p>
                                Vamos criar um site profissional pensado para representar sua marca e transformar visitantes em clientes.
                            </p>
                            <button className="button3" onClick={openOrcamento}>
                                Entrar em contato <MdWhatsapp />
                            </button>

                        </div>

                    </div>
                </div>

                {/* =========================
                    MODAL ORÇAMENTO
                ======================== */}

                <section>
                    <SectionOrcamento
                        modal={modal}
                        setModal={setModal}
                    />
                </section>

            </section>

        </>
    )
}

export default Section1
