import { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from "react-icons/md";

import {
  LuMessageCircle,
  LuSettings,
  LuSlidersHorizontal,
  LuCode,
  LuEye,
  LuRocket
} from "react-icons/lu";

import "../styles/etapas.css";

function Etapas() {

  const etapas = [
    {
      titulo: "Contato",
      icon: <LuMessageCircle />,
      texto: "Aqui vou conhecer você, juntamente ao seu produto e entender a sua necessidade.",
      texto2: "É o primeiro e mais importante passo para garantir que o resultado final atenda perfeitamente às suas expectativas."
    },
    {
      titulo: "Configurações",
      icon: <LuSettings />,
      texto: "Vamos definir as configurações iniciais do seu site, caso ainda não tenha um já existente.",
      texto2: "Nesta etapa, estabelecemos a base técnica e visual que dará suporte para todo o desenvolvimento posterior do seu projeto."
    },
    {
      titulo: "Alinhamento",
      icon: <LuSlidersHorizontal />,
      texto: "Vamos estabelecer todas as preferências e referências para a construção da sua página.",
      texto2: "Nesta etapa crucial, alinhamos expectativas e definimos a identidade visual e funcional que seu site ou sistema terá."
    },
    {
      titulo: "Desenvolvimento",
      icon: <LuCode />,
      texto: "Mãos à obra! Nessa fase, seu projeto começa a ganhar forma – com foco em qualidade, performance e experiência do usuário.",
      texto2: "Aqui transformamos os conceitos e planejamentos das etapas anteriores em código real e funcional."
    },
    {
      titulo: "Apresentação",
      icon: <LuEye />,
      texto: "Sua página está pronta! Agora você poderá analisar todos os detalhes e solicitar ajustes.",
      texto2: "Este momento é crucial para garantir que o projeto final atenda exatamente às suas expectativas."
    },
    {
      titulo: "Entrega",
      icon: <LuRocket />,
      texto: "Sua página de alto padrão estará 100% finalizada e pronta para uso.",
      texto2: "Você receberá tutoriais e suporte para alterações futuras ou manutenções."
    }
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () =>
    setCurrentStep((prev) => (prev + 1) % etapas.length);

  const prevStep = () =>
    setCurrentStep((prev) => (prev - 1 + etapas.length) % etapas.length);

  return (
    <section className="etapas-section" id="Etapas">

      {/* Header */}
      <div className="etapas-header">
        <h1 className="Titulo-principal-etapas">Processo de Criação</h1>
        <p className="Subtitulos-etapas">
          O processo de criação da sua página de alto padrão é dividido em 06 pilares fundamentais.
        </p>
      </div>

      {/* Conteúdo */}
      <div className="etapas-conteudo">
        {/* Card (texto + ícone) */}
        <div className="etapa-card-flex fade" key={currentStep}>
          {/* Etapas (esquerda) */}
        <div className="etapas-indicadores">
          {etapas.map((_, index) => (
            <button
              key={index}
              className={`etapa-btn ${currentStep === index ? "ativo" : ""}`}
              onClick={() => setCurrentStep(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

          {/* Texto (meio) */}
          <div className="etapa-centro">
            <h2 className="etapa-titulo">
              {etapas[currentStep].titulo}
            </h2>

            <div className="etapa-textos">
              <p>{etapas[currentStep].texto}</p>
              <p>{etapas[currentStep].texto2}</p>
            </div>

            <div className="etapa-navegacao">
              <button className="etapa-seta" onClick={prevStep}>
                <MdOutlineKeyboardArrowLeft className="arrow-icon" />
              </button>

              <button className="etapa-seta" onClick={nextStep}>
                <MdOutlineKeyboardArrowRight className="arrow-icon" />
              </button>
            </div>
          </div>

          {/* Ícone (direita) */}
          <div className="etapa-icon-direita">
            {etapas[currentStep].icon}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Etapas;
