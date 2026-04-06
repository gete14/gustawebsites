import { useState } from 'react'
import '../../styles/portfolio.css'

import odonto from '../../img/card-odonto.png'
import SITEodonto from '../../img/site-complete-odonto.png'

import medico from '../../img/card-medico.png'
import SITEmedico from '../../img/site-complete-medico.png'

import design from '../../img/card-design.png'
import embreve from '../../img/card-embreve.png'
import SITEdesign1 from '../../img/site-complete-design1.png'
import SITEdesign2 from '../../img/site-complete-design2.png'
import SITEdesign3 from '../../img/site-complete-design3.png'
import SITEdesign4 from '../../img/site-complete-design4.png'

function Section1() {

    const [modalAberto, setModalAberto] = useState(false)
    const [cardSelecionado, setCardSelecionado] = useState(null)
    const [filtro, setFiltro] = useState('Todos')

    const cards = [
        {
            id: 1,
            categoria: 'Odontologia',
            titulo: 'Clínica Odontológica',
            imagem: odonto,
            sites: [SITEodonto],
            descricao: 'Site para clínica odontológica com foco em conversão.',
            status: 'pronto'
        },
        {
            id: 2,
            categoria: 'Portfólio',
            titulo: 'Site Médico',
            imagem: medico,
            sites: [SITEmedico],
            descricao: 'Site profissional para médicos com agendamento.',
            status: 'pronto'
        },
        {
            id: 3,
            categoria: 'Design',
            titulo: 'Projeto Criativo',
            imagem: design,
            sites: [SITEdesign1, SITEdesign2, SITEdesign3, SITEdesign4],
            descricao: 'Design moderno e focado em estética visual.',
            status: 'pronto'
        },

        // 🔥 EM DESENVOLVIMENTO
        {
            id: 4,
            categoria: 'Landing Page',
            titulo: 'Landing Page Negócios',
            imagem: embreve,
            sites: [],
            descricao: 'Landing page para conversão de clientes.',
            status: 'dev'
        },
        {
            id: 5,
            categoria: 'Institucional',
            titulo: 'Empresa Local',
            imagem: embreve,
            sites: [],
            descricao: 'Site institucional profissional.',
            status: 'dev'
        },
        {
            id: 6,
            categoria: 'Portfólio',
            titulo: 'Portfólio Pessoal',
            imagem: embreve,
            sites: [],
            descricao: 'Portfólio moderno para profissionais.',
            status: 'dev'
        },
        {
            id: 7,
            categoria: 'Design',
            titulo: 'UI/UX Avançado',
            imagem: embreve,
            sites: [],
            descricao: 'Projeto focado em experiência do usuário.',
            status: 'dev'
        },
        {
            id: 8,
            categoria: 'Landing Page',
            titulo: 'Produto Digital',
            imagem: embreve,
            sites: [],
            descricao: 'Landing page para infoprodutos.',
            status: 'dev'
        },
        {
            id: 9,
            categoria: 'Institucional',
            titulo: 'Consultoria',
            imagem: embreve,
            sites: [],
            descricao: 'Site para empresas de consultoria.',
            status: 'dev'
        }
        
    ]

    const categorias = ['Todos', 'Odontologia', 'Portfólio', 'Design', 'Landing Page', 'Institucional']

    const cardsFiltrados =
        filtro === 'Todos'
            ? cards
            : cards.filter(card => card.categoria === filtro)

    return (
        <>
            {modalAberto && cardSelecionado && (
                <div className="modal-overlay" onClick={() => setModalAberto(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setModalAberto(false)}>✕</button>

                        <h2>{cardSelecionado.titulo}</h2>
                        <p>{cardSelecionado.descricao}</p>

                        {cardSelecionado.status === 'dev' ? (
                            <div className="em-dev">
                                🚧 Projeto em desenvolvimento
                            </div>
                        ) : (
                            <div className="modal-images">
                                {cardSelecionado.sites.map((img, index) => (
                                    <img key={index} src={img} alt="" />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <section className="portfolio">
                <div className="portfolio-header">
                    <div className="tittle-section">
                        <h1>Meu Portfólio</h1>
                        <p>Explore meus projetos recentes e veja como posso transformar sua visão em realidade digital.</p>
                    </div>

{/* 
                    <div className="portfolio-filtros">
                        {categorias.map(item => (
                            <button
                                key={item}
                                className={filtro === item ? 'ativo' : ''}
                                onClick={() => setFiltro(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
*/}
                </div>

                <div className="portfolio-cards">
                    {cardsFiltrados.map(card => (
                        <div className="portfolio-card" key={card.id}>
                            
                            {card.status === 'dev' && (
                                <span className="badge-dev">Em breve</span>
                            )}

                            <h2>{card.titulo}</h2>
                            <img src={card.imagem} alt="" />

                            <button
                                onClick={() => {
                                    setCardSelecionado(card)
                                    setModalAberto(true)
                                }}
                                className="button1"
                            >
                                VER DETALHES
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Section1