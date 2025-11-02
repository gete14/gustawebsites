import '../styles/pages-acima-1024/planos.css';
import '../styles/responsividade-481-1024/planos.css';
import '../styles/responsividade-480/planos.css';
import React, { useState } from "react";
import celularImg from "../img/celular.png";

// Import dos ícones
import { FaGlobe, FaCalendarAlt, FaCogs, FaUsers, FaBullseye, FaShoppingCart } from "react-icons/fa";

function Planos() {
  const planos = [
    {
      nome: "Site Institucional",
      preco: "R$ 300,00",
      descricao: "Ideal para apresentar sua empresa e serviços de forma profissional. Um site institucional sólido transmite credibilidade e fortalece sua presença online.",
      beneficios: [
        "Design moderno e elegante",
        "Página inicial + até 3 internas",
        "Formulário de contato funcional",
        "Otimização para Google (SEO básico)",
        "Totalmente responsivo",
      ],
      icon: <FaGlobe />,
    },
    {
      nome: "Agenda Online",
      preco: "R$ 450,00",
      descricao: "Perfeito para profissionais que desejam agendar consultas, serviços ou reuniões online. Totalmente automatizado para economizar seu tempo.",
      beneficios: [
        "Agendamento integrado com calendário",
        "Painel de controle simples",
        "Notificações automáticas por e-mail",
        "Design personalizado",
        "Responsivo e seguro",
      ],
      icon: <FaCalendarAlt />,
    },
    {
      nome: "Sistemas Internos",
      preco: "R$ 950,00",
      descricao: "Desenvolvimento de sistemas internos sob medida para controle, relatórios e automação de processos da sua empresa.",
      beneficios: [
        "Sistema personalizado",
        "Banco de dados seguro",
        "Painel administrativo completo",
        "Escalável para crescimento",
        "Treinamento incluso",
      ],
      icon: <FaCogs />,
    },
    {
      nome: "Área de Membros",
      preco: "R$ 600,00",
      descricao: "Crie um espaço exclusivo para alunos ou clientes com login e conteúdo restrito. Ideal para cursos e mentorias online.",
      beneficios: [
        "Login e autenticação segura",
        "Painel do aluno personalizado",
        "Controle de acesso por planos",
        "Área de vídeos e materiais",
        "Suporte completo",
      ],
      icon: <FaUsers />,
    },
    {
      nome: "Landing Page",
      preco: "R$ 250,00",
      descricao: "Uma página única e altamente otimizada para conversão. Ideal para campanhas, produtos ou captação de leads.",
      beneficios: [
        "Design estratégico e objetivo",
        "Foco em conversão",
        "Integração com WhatsApp e e-mail",
        "Rápida e leve",
        "Otimizada para SEO",
      ],
      icon: <FaBullseye />,
    },
    {
      nome: "Lojas Virtuais",
      preco: "R$ 700,00",
      descricao: "Venda seus produtos online com uma loja completa, segura e personalizada. Gerencie pedidos, estoque e pagamentos em um só lugar.",
      beneficios: [
        "Catálogo de produtos completo",
        "Carrinho e checkout integrados",
        "Pagamentos com Pix e Cartão",
        "Gerenciamento de pedidos",
        "Layout moderno e responsivo",
      ],
      icon: <FaShoppingCart />,
    },
  ];

  const [categoriaAtiva, setCategoriaAtiva] = useState(planos[0]);

  return (
    <div className="investimento container" id="Investimento">
      <h2 className="Título-principal">Investimento</h2>

      {/* Carrossel / Botões de categoria */}
      <div className="categorias Títulos-de-seção">
        {planos.map((plano) => (
          <button
            key={plano.nome}
            onClick={() => setCategoriaAtiva(plano)}
            className={categoriaAtiva.nome === plano.nome ? "active" : ""}
          >
            <span className="icon">{plano.icon}</span>
            <div className="texto-btn">
              <span>{plano.nome}</span>
              <small>{plano.preco}</small>
            </div>
          </button>
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="investimento-conteudo">
        <img src={celularImg} alt="Exemplo de site" className="investimento-imagem" />

        <div className="investimento-texto">
          <h3 className="Títulos-de-seção">{categoriaAtiva.nome}</h3>
          <p className="Texto-normaL container-preco">
            A partir de: <span className="Títulos-de-seção">{categoriaAtiva.preco}</span>
          </p>
          <p className="Texto-normaL descricao">{categoriaAtiva.descricao}</p>
          <ul>
            {categoriaAtiva.beneficios.map((item, i) => (
              <li key={i} className="Texto-pequeno">{item}</li>
            ))}
          </ul>
          <div className="button">
            <button className="btn-orcamento">Quero um Orçamento</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planos;
