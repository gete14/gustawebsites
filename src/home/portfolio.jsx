import { useState } from 'react'
import '../styles/portfolio.css'
import odonto from '../img/card-odonto.png'
import barbearia from '../img/card-barbearia.png'
import design from '../img/card-design.png'

function Portfolio() {

    const [filtro, setFiltro] = useState('Todos')

    const cards = [
        {
            id: 1,
            categoria: 'Odontologia',
            titulo: 'Odontologia',
            imagem: odonto,
        },
        {
            id: 2,
            categoria: 'Barbearia',
            titulo: 'Barbearia',
            imagem: barbearia,
        },
        {
            id: 3,
            categoria: 'Design',
            titulo: 'Design',
            imagem: design,
        }
    ]

    const cardsFiltrados =
        filtro === 'Todos'
            ? cards
            : cards.filter(card => card.categoria === filtro)

    return (
        <>
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
                        {['Todos', 'Odontologia', 'Barbearia', 'Design'].map(item => (
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
                            <button>VER DETALHES</button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Portfolio
