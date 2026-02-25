import "../../styles/orcamento.css";
import { FaWhatsapp, FaInstagram, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import heroImg from "../../img/eu-v7.png";

function Section1() {
    const [modal, setModal] = useState(false);
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [sucesso, setSucesso] = useState(false);
    const [nomeEnviado, setNomeEnviado] = useState("");
    const [erro, setErro] = useState("");

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        tipoSite: "",
        identidadeVisual: "",
        mensagem: "",
        prazo: ""
    });

    // ✅ perguntas objetivas
    const perguntas = [
        {
            label: "Qual é o seu nome?",
            name: "nome",
            type: "text",
            placeholder: "Digite seu nome"
        },
        {
            label: "Qual é o seu melhor email?",
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
            label: "Que tipo de site você precisa?",
            name: "tipoSite",
            type: "select",
            options: [
                "Landing Page",
                "Site Institucional",
                "Portfólio",
                "Loja Virtual",
                "Não sei ainda"
            ]
        },
        {
            label: "Precisa de Identidade Visual?",
            name: "identidadeVisual",
            type: "select",
            options: ["Sim", "Não", "Ainda não sei"]
        },
        {
            label: "Quando você pretende começar?",
            name: "prazo",
            type: "select",
            options: [
                "Urgente (até 7 dias)",
                "Este mês",
                "Próximos meses",
                "Só pesquisando"
            ]
        },
        {
            label: "Descreva brevemente seu projeto",
            name: "mensagem",
            type: "textarea",
            placeholder: "Explique o que você precisa"
        }
    ];

    const mensagensErro = {
        nome: "Por favor, informe seu nome.",
        email: "Digite um email válido para continuarmos.",
        telefone: "Informe seu WhatsApp para contato.",
        tipoSite: "Selecione o tipo de site que você precisa.",
        identidadeVisual: "Nos diga se precisa de identidade visual.",
        prazo: "Selecione quando deseja começar.",
        mensagem: "Descreva brevemente seu projeto."
    };

    // ✅ atualizar campos
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // ✅ próxima etapa
    const handleNext = () => {
        const campoAtual = perguntas[step].name;

        if (!formData[campoAtual]) {
            setErro(mensagensErro[campoAtual]);
            return;
        }

        setErro("");

        if (step < perguntas.length - 1) {
            setStep(step + 1);
        } else {
            enviarEmail();
        }
    };

    const handleBack = () => {
        if (step > 0) setStep(step - 1);
    };

    // ✅ ENVIO PARA EMAIL (FORM SUBMIT)
    const enviarEmail = async () => {
        try {
            setLoading(true);

            await fetch("https://formsubmit.co/ajax/0728c129642341219ff5ef35a8a0ac64 ", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(formData)
            });

            // ✅ guarda nome antes de limpar
            setNomeEnviado(formData.nome);

            // ✅ mostra popup
            setSucesso(true);

            // reset form
            setFormData({
                nome: "",
                email: "",
                telefone: "",
                tipoSite: "",
                identidadeVisual: "",
                mensagem: "",
                prazo: ""
            });

            setModal(false);
            setStep(0);

        } catch (error) {
            alert("Erro ao enviar. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            {/* ✅ POPUP DE SUCESSO */}
            {sucesso && (
                <div className="popup-sucesso">
                    <div className="popup-box">
                        <h3>✅ Enviado com sucesso!</h3>
                        <p>
                            Obrigado, {nomeEnviado || "cliente"}!
                            Entrarei em contato em breve.
                        </p>

                        <button onClick={() => setSucesso(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}


            <section className="contato">
                <div className="contato-header">
                    <h1>FAÇA SEU ORÇAMENTO</h1>
                    <p>
                        Pronto para levar seu negócio para o próximo nível?
                        Preenche esse formulário clicando no botão abaixo e faça seu orçamento sem compromisso.
                    </p>
                </div>

                <div className="contato-container">
                    {/* Lado esquerdo */}
                    <div className="contato-info">
                        <ul className="info-list">
                            <li>
                                <a
                                    href="https://wa.me/5511915079401"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="info-link"
                                >
                                    <FaWhatsapp className="info-icon whatsapp" />
                                    <div>
                                        <strong>WhatsApp</strong>
                                        <span>+55 11 94002-8922</span>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.instagram.com/gustawebsites"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="info-link"
                                >
                                    <FaInstagram className="info-icon instagram" />
                                    <div>
                                        <strong>Instagram</strong>
                                        <span>@gustawebsites</span>
                                    </div>
                                </a>
                            </li>

                            <li className="info-static">
                                <FaClock className="info-icon" />
                                <div>
                                    <strong>Horário</strong>
                                    <span>Seg à Sex • 08:00 às 20:00</span>
                                </div>
                            </li>

                            <li className="info-static">
                                <FaMapMarkerAlt className="info-icon" />
                                <div>
                                    <strong>Atendimento</strong>
                                    <span>Todo o Brasil</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* botão */}


                    <div className="hero-container">
                        <img src={heroImg} alt="Gustavo" className="hero-img" />

                        <div className="cta-wrapper">
                            <div className="borda-button-2">
                                <div className="button-2">
                                    <button
                                        className="button2"
                                        onClick={() => setModal(true)}
                                    >
                                        Fale Comigo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ✅ MODAL */}
                {modal && (
                    <div className="modal-overlay">
                        <div className="modal-box">
                            <button className="fechar" onClick={() => setModal(false)}>
                                <IoClose />
                            </button>

                            <form onSubmit={(e) => e.preventDefault()}>
                                <h2>{perguntas[step].label}</h2>

                                {/* textarea */}
                                {perguntas[step].type === "textarea" ? (
                                    <textarea
                                        name={perguntas[step].name}
                                        placeholder={perguntas[step].placeholder}
                                        value={formData[perguntas[step].name]}
                                        onChange={handleChange}
                                        required
                                    />
                                ) : perguntas[step].type === "select" ? (
                                    <select
                                        name={perguntas[step].name}
                                        value={formData[perguntas[step].name]}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Selecione...</option>
                                        {perguntas[step].options.map((opt) => (
                                            <option key={opt} value={opt}>
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type={perguntas[step].type}
                                        name={perguntas[step].name}
                                        placeholder={perguntas[step].placeholder}
                                        value={formData[perguntas[step].name]}
                                        onChange={handleChange}
                                        required
                                    />
                                )}

                                {erro && <p className="erro-msg">{erro}</p>}

                                <div className="modal-buttons">
                                    {step > 0 && (
                                        <button type="button" onClick={handleBack}>
                                            Voltar
                                        </button>
                                    )}

                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        disabled={loading}
                                    >
                                        {loading
                                            ? "Enviando..."
                                            : step === perguntas.length - 1
                                                ? "Enviar"
                                                : "Próximo"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </section>
        </>
    );

}

export default Section1;