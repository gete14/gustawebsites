import { useState } from "react";
import '../../styles/planos.css'
import { MdCheckBox } from "react-icons/md";

function Section1() {

    const [planoAberto, setPlanoAberto] = useState(null);

    const numeroWhatsApp = '5511915079401';

    const enviarWhatsApp = (plano) => {
        const mensagem = `Olá! Tenho interesse no plano *${plano}* e gostaria de mais informações.`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    }

    const planos = [
        {
            nome: 'Profissional',
            destaque: false,
            itens: [
                'Landing page estratégica',
                'Design moderno e responsivo',
                'Ideal para quem está começando',
                'Formulário de contato',
                'Botão WhatsApp integrado',
                'SEO básico'
            ]
        },
        {
            nome: 'Empresarial',
            destaque: true,
            itens: [
                'Site institucional completo',
                'Para empresas que querem crescer',
                'Formulários inteligentes',
                'Dashboards de dados',
                'Sistema de vendas automatizado',
                'SEO otimizado',
                'Integração com redes sociais'
            ]
        },
        {
            nome: 'Premium Performance',
            destaque: false,
            itens: [
                'Estrutura completa de conversão',
                'Páginas ilimitadas',
                'Alta performance e segurança avançada',
                'Servidor otimizado',
                'Integração com ferramentas de marketing',
                'Estrutura para tráfego pago',
                'Suporte prioritário'
            ]
        }
    ]

    const togglePlano = (index) => {
        setPlanoAberto(planoAberto === index ? null : index);
    }

    return (
        <section className="planos">
            <div className="tittle-section">
                <h1>PLANOS</h1>
                <span className='linha'></span>
                <p>Qual plano é ideal para o seu negócio?</p>
            </div>

            <div className="planos-container">
                {planos.map((plano, index) => (
                    <div
                        key={index}
                        className={`plano-card 
                        ${plano.destaque ? 'destaque' : ''} 
                        ${planoAberto === index ? 'expandido' : ''}`}
                    >
                        {plano.destaque && (
                            <span className="badge">Mais recomendado</span>
                        )}

                        <div 
                            className="plano-header"
                            onClick={() => togglePlano(index)}
                        >
                            <h2>{plano.nome}</h2>
                            <span className="toggle">
                                {planoAberto === index ? '−' : '+'}
                            </span>
                        </div>

                        <div className="plano-conteudo">
                            <ul>
                                {plano.itens.map((item, i) => (
                                    <li key={i}>
                                        <MdCheckBox size={20} color="#22c55e" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => enviarWhatsApp(plano.nome)}
                            >
                                Solicitar Orçamento
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Section1