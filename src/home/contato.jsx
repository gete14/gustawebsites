import '../styles/contato.css'
import { FaWhatsapp, FaInstagram, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from "react";

function Contato() {
    const [status, setStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        const nome = e.target.nome.value;
        const email = e.target.email.value;
        const telefone = e.target.telefone.value;
        const mensagem = e.target.mensagem.value;

        const texto = `
Olá! Gusta
Me chamo *${nome}*
Com o Email: ${email}
Meu WhatsApp sendo: ${telefone}

Queria tratar sobre:
${mensagem}
`;

        const numeroWhatsApp = "5511915079401";
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

        setTimeout(() => {
            setStatus("sent");
            e.target.reset();
        }, 800);
    };


    return (
        <section className="contato">
            <div className="contato-header">
                <h1>Entre em Contato</h1>
                <p>
                    Pronto para levar seu negócio para o próximo nível?
                    Envie sua mensagem ou solicite um orçamento sem compromisso.
                </p>
            </div>

            <div className="contato-container">
                {/* Lado esquerdo */}
                <div className="contato-info">
                    <h2>Vamos conversar sobre seu projeto</h2>
                    <p>
                        Estou disponível para discutir suas ideias, responder perguntas
                        e criar a solução perfeita para suas necessidades online.
                    </p>

                    <ul>
                        <li>
                            <FaWhatsapp />
                            <span>+55 11 94002-8922</span>
                        </li>
                        <li>
                            <FaClock />
                            <span>Seg à Sex 08:00 às 20:00</span>
                        </li>
                        <li>
                            <FaMapMarkerAlt />
                            <span>Atendimento para todo o Brasil</span>
                        </li>
                    </ul>

                    <div className="redes">
                        <h3>Redes Sociais</h3>
                        <div className="icons">
                            <a
                                href="https://www.instagram.com/gustawebsites"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://wa.me/5511915079401?text=Olá!%20Vi%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços."
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Lado direito */}
                <form className="contato-form" onSubmit={handleSubmit}>
                    <h1>Formulário de Contato</h1>

                    <label htmlFor="nome">Nome *</label>
                    <input
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Digite seu nome completo"
                        required
                    />

                    <label htmlFor="email">Email *</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="exemplo@email.com"
                        required
                    />

                    <label htmlFor="telefone">WhatsApp *</label>
                    <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        required
                    />

                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea
                        id="mensagem"
                        name="mensagem"
                        placeholder="Descreva sua necessidade..."
                        rows="4"
                    ></textarea>

                    <button
                        type="submit"
                        className="button1"
                        disabled={status === "sending"}
                    >
                        {status === "idle" && "Enviar mensagem"}
                        {status === "sending" && "Abrindo WhatsApp..."}
                        {status === "sent" && "Mensagem enviada ✓"}
                    </button>


                    
                </form>
            </div>
        </section>
    )
}

export default Contato
