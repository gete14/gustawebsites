import '../styles/pages-acima-1024/etapas.css'
import '../styles/responsividade-481-1024/etapas.css'
import '../styles/responsividade-480/etapas.css'
import { useEffect, useState, useRef } from "react";

function Etapas() {
  const etapas = [
    { titulo: "Contato", texto: "Aqui vou conhecer você, juntamente ao seu produto e entender a sua necessidade.", texto2: "É o primeiro e mais importante passo para garantir que o resultado final atenda perfeitamente às suas expectativas." },
    { titulo: "Configurações", texto: "Vamos definir as configurações iniciais do seu site, caso ainda não tenha um já existente.", texto2: "Nesta etapa, estabelecemos a base técnica e visual que dará suporte para todo o desenvolvimento posterior do seu projeto." },
    { titulo: "Alinhamento", texto: "Vamos estabelecer todas as preferências e referências para a construção da sua página.", texto2: "Nesta etapa crucial, alinhamos expectativas e definimos a identidade visual e funcional que seu site ou sistema terá." },
    { titulo: "Desenvolvimento", texto: "Mãos à obra! Nessa fase, seu projeto começa a ganhar forma – com foco em qualidade, performance e experiência do usuário. Aqui transformamos os conceitos e planejamentos das etapas anteriores em código real e funcional." },
    { titulo: "Apresentação", texto: "Sua página está pronta! Agora você já poderá analisar todos os detalhes e solicitar alguma alteração caso julgue necessário.", texto2: "Este momento é crucial para garantir que o projeto final atenda exatamente às suas expectativas antes da entrega definitiva." },
    { titulo: "Entrega", texto: "Sua página de alto padrão estará 100% finalizada e pronta para ser utilizada.", texto2: "Você receberá tutoriais necessários para qualquer alteração, além da possibilidade de negociarmos manutenções posteriores." }
  ];

  const [atual, setAtual] = useState(0);
  const [animando, setAnimando] = useState(false);
  const intervaloRef = useRef(null);

  const trocarEtapa = (index) => {
    setAnimando(false);
    setAtual(index);
    setTimeout(() => setAnimando(true), 10); // inicia a animação quase instantaneamente
  };

  const iniciarLoop = (indexInicial = 0) => {
    clearInterval(intervaloRef.current);
    trocarEtapa(indexInicial);

    intervaloRef.current = setInterval(() => {
      setAnimando(false);
      setAtual((prev) => (prev + 1) % etapas.length);
      setTimeout(() => setAnimando(true), 10);
    }, 4000);
  };

  useEffect(() => {
    iniciarLoop(0);
    return () => clearInterval(intervaloRef.current);
  }, []);

  return (
    <div className="container" id='Etapas'>
      <section className="processo">
        <h1 className="Título-principal">Processo de Criação</h1>
        <p className="Subtítulos">
          O processo de criação da sua página de alto padrão é dividido em 06 pilares fundamentais.
          Cada um deles foi pensado cuidadosamente para que toda a sua experiência seja única!
        </p>
      </section>

      <div className="bloco">
        <div className="numeros">
            {etapas.map((_, index) => (
              <div
                key={index}
                className={`num ${index === atual ? "active" : ""} ${index === atual && animando ? "animar" : ""}`}
                onClick={() => iniciarLoop(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        <h2 className="">{etapas[atual].titulo}</h2>
        <div className="conteudo">
          <div className="Texto-normaL">
            <p className="paragrafo1 fadeIn">{etapas[atual].texto}</p>
            <p className="paragrafo1 fadeIn">{etapas[atual].texto2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Etapas;
