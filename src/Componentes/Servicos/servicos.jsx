import '../../styles/servicos.css'
import {
    FiMonitor,
    FiSmartphone,
    FiDollarSign,
    FiShoppingCart,
    FiTool,
    FiServer,
    FiTrendingUp,
    FiLayers
} from "react-icons/fi";
import { useState } from "react";

function Section1() {

    const [ativo, setAtivo] = useState(null);
    const toggleCard = (index) => {
        setAtivo(ativo === index ? null : index);
    };
    const servicos = [
        {
            icon: <FiMonitor size={30} />,
            titulo: "Desenvolvimento Web",
            descricao: "Criação de sites modernos, responsivos e focados em performance para destacar seu negócio na internet."
        },
        {
            icon: <FiSmartphone size={30} />,
            titulo: "Design UI/UX",
            descricao: "Interfaces intuitivas e atraentes que melhoram a experiência do usuário e aumentam conversões."
        },
        {
            icon: <FiTrendingUp size={30} />,
            titulo: "Otimização e SEO",
            descricao: "Melhoria de desempenho e visibilidade nos buscadores para atrair mais clientes."
        },
        {
            icon: <FiLayers size={30} />,
            titulo: "Landing Pages Estratégicas",
            descricao: "Páginas focadas em conversão, ideais para campanhas e lançamentos, com estrutura pensada para gerar mais leads e vendas."
        },
        {
            icon: <FiShoppingCart size={30} />,
            titulo: "E-commerce",
            descricao: "Criação de lojas virtuais completas, seguras e otimizadas para proporcionar a melhor experiência de compra."
        },
        {
            icon: <FiTool size={30} />,
            titulo: "Manutenção e Suporte",
            descricao: "Atualizações, correções e melhorias contínuas para manter seu site sempre seguro, rápido e funcionando perfeitamente."
        },
        {
            icon: <FiServer size={30} />,
            titulo: "Integração de Sistemas",
            descricao: "Integração com APIs, meios de pagamento e ferramentas externas para automatizar processos e aumentar a eficiência."
        }
    ]

    return (
        <>
            <section className='servicos'>
                <div className="tittle-section" id='servicos'>
                    <h1>Meus Serviços</h1>
                    <span className='linha'></span>
                    <p>
                        Crio experiências digitais únicas, combinando design moderno,
                        performance e visibilidade online que convertem clientes.
                    </p>
                </div>

                <div className="container-cards">
                    {servicos.map((servico, index) => (
                        <div
                            className={`card-servico ${ativo === index ? "ativo" : ""}`}
                            key={index}
                            onClick={() => toggleCard(index)}
                        >
                            <div className="card-header">
                                <div className="icon">{servico.icon}</div>
                                <h3>{servico.titulo}</h3>
                            </div>

                            <p className="descricao">
                                {servico.descricao}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Section1