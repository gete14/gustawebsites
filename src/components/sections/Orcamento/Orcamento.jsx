import "../../../styles/orcamento.css";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";

function SectionOrcamento({ modal, setModal }) {
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [sucesso, setSucesso] = useState(false);
    const [nomeEnviado, setNomeEnviado] = useState("");
    const [erro, setErro] = useState("");

    const [formData, setFormData] = useState({
        nome: "",
        empresa: "",
        telefone: "",
        email: "",
        tipoNegocio: "",
        localizacao: "",
        objetivo: "",
        possuiSite: "",
        prazo: "",
        mensagem: ""
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

            window.scrollTo(
                0,
                parseInt(scrollY || "0") * -1
            );
        }
    }, [modal]);

    // =====================================================
    // PERGUNTAS
    // =====================================================

    const perguntas = [
        {
            label: "Qual é o seu nome?",
            name: "nome",
            type: "text",
            placeholder: "Digite seu nome",
            required: true
        },

        {
            label: "Qual é o nome da sua empresa ou negócio?",
            name: "empresa",
            type: "text",
            placeholder: "Ex: Gusta Barber, Clínica Vida...",
            required: true
        },

        {
            label: "Qual é o seu WhatsApp?",
            name: "telefone",
            type: "tel",
            placeholder: "(11) 99999-9999",
            required: true
        },

        {
            label: "Quer deixar seu e-mail?",
            name: "email",
            type: "email",
            placeholder: "exemplo@email.com",
            required: false
        },

        {
            label: "Qual é o seu tipo de negócio?",
            name: "tipoNegocio",
            type: "select",
            options: [
                "Prestação de serviços",
                "Comércio",
                "Profissional autônomo",
                "Empresa",
                "Profissional liberal",
                "Outro"
            ],
            required: true
        },

        {
            label: "Onde sua empresa está localizada?",
            name: "localizacao",
            type: "text",
            placeholder: "Cidade / Estado",
            required: false
        },

        {
            label: "O que você espera do seu portfólio?",
            name: "objetivo",
            type: "select",
            options: [
                "Apresentar minha empresa",
                "Mostrar meus trabalhos/projetos",
                "Passar mais profissionalismo",
                "Conseguir novos clientes",
                "Fortalecer minha presença online",
                "Outro"
            ],
            required: true
        },

        {
            label: "Você já possui algum portfólio ou site?",
            name: "possuiSite",
            type: "select",
            options: [
                "Sim, já tenho",
                "Não, será o primeiro",
                "Tenho, mas quero renovar"
            ],
            required: true
        },

        {
            label: "Quando você gostaria de ter o portfólio pronto?",
            name: "prazo",
            type: "select",
            options: [
                "O mais rápido possível",
                "Nos próximos 7 dias",
                "Nas próximas semanas",
                "Ainda estou planejando"
            ],
            required: true
        },

        {
            label: "Quer me contar mais alguma coisa sobre o projeto?",
            name: "mensagem",
            type: "textarea",
            placeholder: "Pode escrever livremente. Essa pergunta é opcional.",
            required: false
        }
    ];

    // =====================================================
    // MENSAGENS DE ERRO
    // =====================================================

    const mensagensErro = {
        nome: "Por favor, informe seu nome.",
        empresa: "Informe o nome da sua empresa ou negócio.",
        telefone: "Informe seu WhatsApp.",
        tipoNegocio: "Selecione o tipo do seu negócio.",
        objetivo: "Selecione o que você espera do portfólio.",
        possuiSite: "Selecione uma opção.",
        prazo: "Selecione quando gostaria de ter o projeto pronto."
    };

    // =====================================================
    // ALTERAR CAMPOS
    // =====================================================

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        setErro("");
    };

    // =====================================================
    // PRÓXIMA PERGUNTA
    // =====================================================

    const handleNext = () => {
        const perguntaAtual = perguntas[step];
        const campoAtual = perguntaAtual.name;

        // Verifica somente campos obrigatórios
        if (
            perguntaAtual.required &&
            !formData[campoAtual].trim()
        ) {
            setErro(
                mensagensErro[campoAtual] ||
                "Preencha este campo para continuar."
            );

            return;
        }

        setErro("");

        if (step < perguntas.length - 1) {
            setStep((prev) => prev + 1);
        } else {
            enviarFormulario();
        }
    };

    // =====================================================
    // VOLTAR
    // =====================================================

    const handleBack = () => {
        if (step > 0) {
            setStep((prev) => prev - 1);
            setErro("");
        }
    };

    // =====================================================
    // GERAR PROTOCOLO
    // =====================================================

    const gerarProtocolo = () => {
        const agora = new Date();

        const data = agora
            .toISOString()
            .slice(0, 10)
            .replace(/-/g, "");

        const aleatorio = Math.floor(
            1000 + Math.random() * 9000
        );

        return `GW-${data}-${aleatorio}`;
    };

    // =====================================================
    // MONTAR MENSAGEM DO WHATSAPP
    // =====================================================

    const criarMensagemWhatsApp = (protocolo) => {

        return `Olá, Gustavo! 👋

Vim pelo seu site e gostaria de conversar sobre a criação de um portfólio.

Meu nome é ${formData.nome} e meu protocolo é ${protocolo}.

Obrigado!`;
    };

    // =====================================================
    // ENVIO
    // =====================================================

    const enviarFormulario = async () => {
        try {
            setLoading(true);
            setErro("");

            // Gera UM único protocolo para esse atendimento
            const protocolo = gerarProtocolo();

            // Dados que serão enviados para o e-mail
            const dadosEnvio = {
                ...formData,

                protocolo,

                _subject:
                    `Novo contato - ${formData.nome} | ${protocolo}`,

                _template: "table",

                _captcha: "false"
            };

            const response = await fetch(
                "https://formsubmit.co/ajax/0728c129642341219ff5ef35a8a0ac64",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },

                    body: JSON.stringify(dadosEnvio)
                }
            );

            if (!response.ok) {
                throw new Error(
                    "Erro ao enviar formulário."
                );
            }

            // Guarda o nome para o popup
            setNomeEnviado(formData.nome);

            // ============================================
            // WHATSAPP
            // ============================================

            const mensagemWhatsApp =
                criarMensagemWhatsApp(protocolo);

            const numeroWhatsApp =
                "5511915079401";

            const urlWhatsApp =
                `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
                    mensagemWhatsApp
                )}`;

            window.open(
                urlWhatsApp,
                "_blank"
            );

            // ============================================
            // RESET
            // ============================================

            setFormData({
                nome: "",
                empresa: "",
                telefone: "",
                email: "",
                tipoNegocio: "",
                localizacao: "",
                objetivo: "",
                possuiSite: "",
                prazo: "",
                mensagem: ""
            });

            setModal(false);
            setStep(0);

            // Popup de sucesso
            setSucesso(true);

        } catch (error) {
            console.error(error);

            setErro(
                "Não foi possível enviar. Tente novamente."
            );

        } finally {
            setLoading(false);
        }
    };

    // =====================================================
    // RENDER
    // =====================================================

    return (
        <>
            {/* =============================================
                POPUP DE SUCESSO
            ============================================= */}

            {sucesso && (
                <div className="popup-sucesso">
                    <div className="popup-sucesso-box">

                        <button
                            className="sucesso-fechar"
                            onClick={() => setSucesso(false)}
                            aria-label="Fechar"
                        >
                            ×
                        </button>

                        <div className="sucesso-icon">
                            <div className="sucesso-check">
                                ✓
                            </div>
                        </div>

                        <div className="sucesso-conteudo">

                            <span className="sucesso-tag">
                                Solicitação recebida
                            </span>

                            <h3>
                                Enviado com sucesso!
                            </h3>

                            <p>
                                Obrigado, {nomeEnviado || "cliente"}!
                                <br />
                                Recebi sua mensagem e entrarei em contato em breve.
                            </p>

                        </div>

                        <button
                            className="sucesso-button"
                            onClick={() => setSucesso(false)}
                        >
                            Perfeito!
                        </button>

                    </div>
                </div>
            )}

            {/* =============================================
                MODAL
            ============================================= */}

            <section className="contato">

                {modal && (
                    <div className="modal-overlay">

                        <div className="modal-box">

                            <button
                                className="fechar"
                                onClick={() =>
                                    setModal(false)
                                }
                            >
                                <IoClose />
                            </button>

                            <form
                                onSubmit={(e) =>
                                    e.preventDefault()
                                }
                            >

                                {/* TÍTULO */}

                                <h2>
                                    {
                                        perguntas[step]
                                            .label
                                    }
                                </h2>

                                {/* =================================
                                    TEXTAREA
                                ================================= */}

                                {perguntas[step].type ===
                                    "textarea" ? (

                                    <textarea
                                        name={
                                            perguntas[step]
                                                .name
                                        }

                                        placeholder={
                                            perguntas[step]
                                                .placeholder
                                        }

                                        value={
                                            formData[
                                            perguntas[step]
                                                .name
                                            ]
                                        }

                                        onChange={
                                            handleChange
                                        }
                                    />

                                ) : perguntas[step].type ===
                                    "select" ? (

                                    /* =============================
                                       SELECT
                                    ============================= */

                                    <select
                                        name={
                                            perguntas[step]
                                                .name
                                        }

                                        value={
                                            formData[
                                            perguntas[step]
                                                .name
                                            ]
                                        }

                                        onChange={
                                            handleChange
                                        }
                                    >

                                        <option value="">
                                            Selecione...
                                        </option>

                                        {perguntas[
                                            step
                                        ].options.map(
                                            (option) => (
                                                <option
                                                    key={
                                                        option
                                                    }
                                                    value={
                                                        option
                                                    }
                                                >
                                                    {
                                                        option
                                                    }
                                                </option>
                                            )
                                        )}

                                    </select>

                                ) : (

                                    /* =============================
                                       INPUT
                                    ============================= */

                                    <input
                                        type={
                                            perguntas[step]
                                                .type
                                        }

                                        name={
                                            perguntas[step]
                                                .name
                                        }

                                        placeholder={
                                            perguntas[step]
                                                .placeholder
                                        }

                                        value={
                                            formData[
                                            perguntas[step]
                                                .name
                                            ]
                                        }

                                        onChange={
                                            handleChange
                                        }

                                        required={
                                            perguntas[step]
                                                .required
                                        }
                                    />

                                )}

                                {/* =================================
                                    AVISO OPCIONAL
                                ================================= */}

                                {!perguntas[step]
                                    .required && (
                                        <small className="campo-opcional">
                                            Opcional
                                        </small>
                                    )}

                                {/* =================================
                                    ERRO
                                ================================= */}

                                {erro && (
                                    <p className="erro-msg">
                                        {erro}
                                    </p>
                                )}

                                {/* =================================
                                    BOTÕES
                                ================================= */}

                                <div className="modal-buttons">

                                    {step > 0 && (
                                        <button
                                            type="button"
                                            onClick={
                                                handleBack
                                            }
                                        >
                                            Voltar
                                        </button>
                                    )}

                                    <button
                                        type="button"
                                        onClick={
                                            handleNext
                                        }
                                        disabled={loading}
                                    >
                                        {loading
                                            ? "Enviando..."
                                            : step ===
                                                perguntas.length -
                                                1
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