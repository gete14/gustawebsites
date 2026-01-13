import { useState } from 'react'
import '../styles/portfolio.css'
import odonto from '../img/card-odonto.png'
import SITEodonto from '../img/site-complete-odonto.png'
import medico from '../img/card-medico.png'
import SITEmedico from '../img/site-complete-medico.png'
import design from '../img/card-design.png'
import SITEdesign1 from '../img/site-complete-design1.png'
import SITEdesign2 from '../img/site-complete-design2.png'
import SITEdesign3 from '../img/site-complete-design3.png'
import SITEdesign4 from '../img/site-complete-design4.png'


function Portfolio() {

    const [modalAberto, setModalAberto] = useState(false)
    const [cardSelecionado, setCardSelecionado] = useState(null)

    const [filtro, setFiltro] = useState('Todos')

    const cards = [
        {
            id: 1,
            categoria: 'Odontologia',
            titulo: 'Odontologia',
            imagem: odonto,
            sites: [SITEodonto],
            descricao: 'Modelo de site voltado para clínicas odontológicas, com foco em conversão e apresentação de serviços.'
        },
        {
            id: 2,
            categoria: 'Médico',
            titulo: 'Médico',
            imagem: medico,
            sites: [SITEmedico],
            descricao: 'Modelo de site voltado para médicos, com foco em credibilidade, apresentação profissional, informações sobre atendimentos e agendamento de consultas.'
        },
        {
            id: 3,
            categoria: 'Design',
            titulo: 'Design',
            imagem: design,
            sites: [
                SITEdesign1,
                SITEdesign2,
                SITEdesign3,
                SITEdesign4
            ],
            descricao: 'Projeto focado em design criativo, valorizando tipografia e estética visual.'
        }
    ]


    const cardsFiltrados =
        filtro === 'Todos'
            ? cards
            : cards.filter(card => card.categoria === filtro)

    return (
        <>

            {modalAberto && cardSelecionado && (
                <div className="modal-overlay" onClick={() => setModalAberto(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="modal-close"
                            onClick={() => setModalAberto(false)}
                        >
                            ✕
                        </button>
                        <h2>{cardSelecionado.titulo}</h2>
                        

                        <p>{cardSelecionado.descricao}</p>

                        <div className="modal-images">
                            {cardSelecionado.sites.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${cardSelecionado.titulo} ${index + 1}`}
                                />
                            ))}
                        </div>


                    </div>
                </div>
            )}


            <section className="portfolio">
                <div className="portfolio-header">
                    <div className="tittle-section">
                        <h1>Meu Portfólio</h1>
                        <span></span>
                        <p>
                            Explore meus projetos recentes e veja como posso transformar sua visão em realidade digital.
                        </p>
                    </div>

                    <div className="portfolio-filtros">
                        {['Todos', 'Odontologia', 'Portfólio Pessoal', 'Design'].map(item => (
                            <button
                                key={item}
                                className={filtro === item ? 'ativo' : ''}
                                onClick={() => setFiltro(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="portfolio-cards">
                    {cardsFiltrados.map(card => (
                        <div className={`portfolio-card ${card.categoria.toLowerCase()}`} key={card.id}>
                            <h2>{card.titulo}</h2>
                            <img src={card.imagem} alt={card.titulo} />
                            <button
                                onClick={() => {
                                    setCardSelecionado(card)
                                    setModalAberto(true)
                                }}>VER DETALHES</button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Portfolio
