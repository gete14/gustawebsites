import "../../styles/contato.css";
import { FaWhatsapp, FaInstagram, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Section1() {
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [nomeEnviado, setNomeEnviado] = useState("");

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

    //if (!formData[campoAtual]) {
      //alert("Preencha o campo antes de continuar.");
      //return;
    //}

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

    await fetch("https://formsubmit.co/ajax/gr8029134@gmail.com", {
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
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/5511915079401"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* botão */}
        <div>
          <h2>CLIQUE AQUI PARA REALIZAR SEU ORÇAMENTO</h2>
          <button className="abrir-modal" onClick={() => setModal(true)}>
            Solicitar Orçamento
          </button>
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