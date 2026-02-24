import '../../styles/contato.css'
import { FaWhatsapp, FaInstagram, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { useState } from "react";

function Section1() {
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


    const [modal, setModal] = useState(false);
    const [step, setStep] = useState(0);

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
    });


    const perguntas = [
        {
            label: "Qual é o seu nome?",
            name: "nome",
            type: "text",
            placeholder: "Digite seu nome completo"
        },
        {
            label: "Qual é o seu email?",
            name: "email",
            type: "email",
            placeholder: "exemplo@email.com"
        },
        {
            label: "Qual é o seu WhatsApp?",
            name: "telefone",
            type: "tel",
            placeholder: "(11) 99999-9999"
        },
        {
            label: "Descreva sua necessidade",
            name: "mensagem",
            type: "textarea",
            placeholder: "Fale um pouco sobre seu projeto"
        }
    ];



    const handleNext = () => {
        if (step < perguntas.length - 1) {
            setStep(step + 1);
        } else {
            enviarWhatsApp();
        }
    };

    const handleBack = () => {
        if (step > 0) {
            setStep(step - 1);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    const enviarWhatsApp = () => {

        const texto = `
Olá! Gusta
Me chamo *${formData.nome}*
Com o Email: ${formData.email}
Meu WhatsApp sendo: ${formData.telefone}

Queria tratar sobre:
${formData.mensagem}
`;

        const numeroWhatsApp = "5511915079401";
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank");

        setModal(false);
        setStep(0);
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
                <div>
                    <h2>CLIQUE AQUI PARA REALIZAR SEU ORÇAMENTO</h2>
                    <button className="abrir-modal" onClick={() => setModal(true)}>
                        Solicitar Orçamento
                    </button>
                </div>



            </div>
            {modal && (
                <div className="modal-overlay" role="dialog" aria-modal="true">
                    <div className="modal-box">

                        <button
                            className="fechar"
                            onClick={() => setModal(false)}
                            aria-label="Fechar"
                        >
                            ✕
                        </button>

                        <h2>{perguntas[step].label}</h2>

                        {perguntas[step].type === "textarea" ? (
                            <textarea
                                name={perguntas[step].name}
                                placeholder={perguntas[step].placeholder}
                                value={formData[perguntas[step].name]}
                                onChange={handleChange}
                            />
                        ) : (
                            <input
                                type={perguntas[step].type}
                                name={perguntas[step].name}
                                placeholder={perguntas[step].placeholder}
                                value={formData[perguntas[step].name]}
                                onChange={handleChange}
                            />
                        )}

                        <div className="modal-buttons">
                            {step > 0 && (
                                <button onClick={handleBack}>Voltar</button>
                            )}

                            <button onClick={handleNext}>
                                {step === perguntas.length - 1 ? "Enviar" : "Próximo"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Section1
