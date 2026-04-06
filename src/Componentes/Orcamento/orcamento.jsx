import "../../styles/orcamento.css";
import { FaWhatsapp, FaInstagram, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import heroImg from "../../img/eu-v7.png";

function SectionOrcamento({ modal, setModal }) {
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

   useEffect(() => {
    if (modal) {
        const scrollY = window.scrollY;

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
    } else {
        const scrollY = document.body.style.top;

        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
}, [modal]);

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

    // 🔥 NOVO (IMPORTANTE)
    {
        label: "Qual é o seu negócio / área de atuação?",
        name: "nicho",
        type: "text",
        placeholder: "Ex: Barbearia, Clínica, Loja..."
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

    // 🔥 NOVO (MUITO IMPORTANTE)
    {
        label: "Qual o principal objetivo do site?",
        name: "objetivo",
        type: "select",
        options: [
            "Gerar clientes",
            "Mostrar meu trabalho",
            "Vender produtos",
            "Agendamentos",
            "Outro"
        ]
    },

    // 🔥 NOVO (ESSENCIAL PRA ORÇAMENTO)
    {
        label: "Quais funcionalidades você precisa?",
        name: "funcionalidades",
        type: "checkbox",
        options: [
            "Formulário de contato",
            "WhatsApp integrado",
            "Sistema de agendamento",
            "Área de membros",
            "Blog",
            "Pagamento online",
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

    // 🔥 NOVO (OURO PRA FILTRAR CLIENTE)
    {
        label: "Qual é o seu orçamento para o projeto?",
        name: "orcamento",
        type: "select",
        options: [
            "Até R$500",
            "R$500 - R$1.000",
            "R$1.000 - R$3.000",
            "R$3.000 - R$5.000",
            "R$5.000+",
            "Prefiro não informar"
        ]
    },

    // 🔥 NOVO (REFERÊNCIA AJUDA MUITO)
    {
        label: "Você tem algum site de referência?",
        name: "referencia",
        type: "textarea",
        placeholder: "Envie links ou exemplos que você gosta"
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
    const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
        ...prev,
        funcionalidades: checked
            ? [...prev.funcionalidades, value]
            : prev.funcionalidades.filter((item) => item !== value)
    }));
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

export default SectionOrcamento;