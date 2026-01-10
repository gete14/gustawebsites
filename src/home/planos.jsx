import '../styles/planos.css'
import { MdCheckBox } from "react-icons/md";

function Planos() {

    const planos = [
        {
            nome: 'Essencial',
            destaque: false,
            itens: [
                'Até 5 atualizações por mês',
                'Suporte técnico',
                'Correções pontuais pós-entrega',
                'Ajustes simples de conteúdo',
                '1 reunião mensal de alinhamento',
                'Suporte básico'
            ]
        },
        {
            nome: 'Profissional',
            destaque: true,
            itens: [
                'Até 10 atualizações por mês',
                'Suporte técnico',
                'Ajustes contínuos no site',
                'Pequenas melhorias visuais',
                '1 reunião mensal de alinhamento',
                'Suporte prioritário'
            ]
        },
        {
            nome: 'Premium',
            destaque: false,
            itens: [
                'Até 20 atualizações por mês',
                'Suporte técnico',
                'Melhorias constantes',
                'Implementações simples sob demanda',
                '2 reuniões mensais de alinhamento',
                'Suporte avançado'
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
                                <li key={i}><MdCheckBox size={22} color="#22c55e"/> {item}</li>
                            ))}
                        </ul>

                        <button>Solicitar Orçamento</button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Planos
