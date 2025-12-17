import { useState } from "react";
import "../styles/planos.css";

export default function Planos() {
  const numeroDestino = "5511915079401";

  const [dados, setDados] = useState({
    tipoServico: "Manutenção de Site",
    tipoSite: "Landing Page",
    manutencao: [],
    nome: "",
    whatsapp: "",
  });

  

  const atualizarCampo = (campo, valor) => {
    setDados((prev) => ({ ...prev, [campo]: valor }));
  };

  const alternarManutencao = (item) => {
    setDados((prev) => ({
      ...prev,
      manutencao: prev.manutencao.includes(item)
        ? prev.manutencao.filter((i) => i !== item)
        : [...prev.manutencao, item],
    }));
  };

  const enviarWhatsApp = () => {
    const mensagem = `
Olá! Gostaria de um orçamento 👇

Meu Nome é ${dados.nome}
Meu contato do WhatsApp: ${dados.whatsapp}

Serviço:
- ${dados.tipoServico}

Tipo de Página:
- ${dados.tipoSite}

Manutenção:
${
  dados.manutencao.length
    ? dados.manutencao.map((i) => `- ${i}`).join("\n")
    : "- Não definido"
}

Aguardo retorno
    `;

    const url = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="investimento-section" id="Investimento">
      <header className="investimento-header">
        <h2 className="titulo">PREENCHA O FORMULARIO:</h2>
        <p className="subtitulo">
          Escolha abaixo o que você precisa e receba um orçamento direto no
          WhatsApp.
        </p>
      </header>

      <div className="formulario" role="group" aria-label="Solicitação de orçamento">
        <div className="grupo">
          <label>O que você precisa?</label>
          <select
            value={dados.tipoServico}
            onChange={(e) =>
              atualizarCampo("tipoServico", e.target.value)
            }
          >
            <option>Criação de Site</option>
            <option>Manutenção de Site</option>
            <option>Atualização de Página Existente</option>
          </select>
        </div>

        <div className="grupo">
          <label>Tipo de página</label>
          <select
            value={dados.tipoSite}
            onChange={(e) => atualizarCampo("tipoSite", e.target.value)}
          >
            <option>Portfólio Profissional</option>
            <option>Landing Page</option>
            <option>Site Institucional</option>
            <option>Página Única</option>
            <option>Loja</option>
            <option>Sistema Empresarial</option>
          </select>
        </div>

        <div className="grupo">
          <label>Seu nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={dados.nome}
            onChange={(e) => atualizarCampo("nome", e.target.value)}
          />
        </div>

        <div className="grupo">
          <label>Seu WhatsApp</label>
          <input
            type="tel"
            placeholder="(11) 99999-9999"
            value={dados.whatsapp}
            onChange={(e) => atualizarCampo("whatsapp", e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn-enviar"
          onClick={enviarWhatsApp}
        >
          Solicitar orçamento no WhatsApp
        </button>
      </div>
    </section>
  );
}
