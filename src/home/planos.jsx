import '../styles/planos.css'
import { MdCheckBox } from "react-icons/md";

function Planos() {
    const numeroWhatsApp = '5511915079401';

    const enviarWhatsApp = (plano) => {
        const mensagem = `Olá! Tenho interesse no plano *${plano}* e gostaria de um orçamento.`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    }
        const planos = [
            {
                nome: 'Plano Start',
                destaque: false,
                itens: [
                    '1 Página (Landing Page profissional)',
                    'Design moderno e responsivo',
                    'Botão WhatsApp integrado',
                    'Formulário de contato',
                    'SEO básico',
                ]
            },
            {
                nome: 'Plano Pro',
                destaque: true,
                itens: [
                    'Até 5 páginas (Home, Sobre, Serviços, Contato…)',
                    'Design estratégico e personalizado',
                    'SEO otimizado',
                    'Integração com redes sociais',
                    'Formulários inteligentes',
                    'Área de blog (opcional)',
                    'Estrutura preparada para tráfego pago'
                ]
            },
            {
                nome: 'Plano Elite',
                destaque: false,
                itens: [
                    'Páginas ilimitadas',
                    'Estrutura completa de conversão',
                    'Servidor otimizado e personalizado',
                    'Alta performance e segurança avançada',
                    'Integração com ferramentas de marketing',
                    'Sistema para vendas online (caso necessário)',
                    'Suporte prioritário',
    
                ]
            }
        ]

        return (
            <section className="planos">
                <div className="tittle-section">
                    <h1>Planos de Suporte</h1>
                    <span className='linha'></span>
                    <p>
                        Escolha o pacote que melhor atende às necessidades do seu negócio.
                    </p>
                </div>

                <div className="planos-container">
                    {planos.map((plano, index) => (
                        <div
                            key={index}
                            className={`plano-card ${plano.destaque ? 'destaque' : ''}`}
                        >
                            {plano.destaque && (
                                <span className="badge">Mais recomendável</span>
                            )}

                            <h2>{plano.nome}</h2>

                            <ul>
                                {plano.itens.map((item, i) => (
                                    <li key={i}><MdCheckBox size={22} color="#22c55e" /> {item}</li>
                                ))}
                            </ul>

                            <button className='button1'onClick={() => enviarWhatsApp(plano.nome)}>Solicitar Orçamento</button>
                        </div>
                    ))}
                </div>
            </section>
        )
    }

    export default Planos
