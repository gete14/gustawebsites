import { useState, useEffect } from 'react'
import '../../../styles/portfolio.css'

import foto1 from '../../../assets/images/foto-projeto1.png'
import foto2 from '../../../assets/images/foto-projeto2.png'
import foto3 from '../../../assets/images/foto-projeto3.png'
import embreve from '../../../assets/images/foto-embreve.png'


function Section1() {

    const [modalAberto, setModalAberto] = useState(false)
    const [cardSelecionado, setCardSelecionado] = useState(null)
    const [filtro, setFiltro] = useState('Todos')

    useEffect(() => {
    if (modalAberto) {
        document.documentElement.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'

        document.documentElement.style.height = '100%'
        document.body.style.height = '100%'
    } else {
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''

        document.documentElement.style.height = ''
        document.body.style.height = ''
    }

    return () => {
        document.documentElement.style.overflow = ''
        document.body.style.overflow = ''
        document.documentElement.style.height = ''
        document.body.style.height = ''
    }
}, [modalAberto])



    // =====================================================
    // PROJETOS
    // =====================================================

    const cards = [

        // ================= PROJETOS CONCLUÍDOS =================

        {
            id: 1,
            categoria: 'Institucional',
            titulo: 'EM INTERIORES',
            descricao: 'Site institucional para empresa de design de interiores.',
            imagem: foto1,
            sites: [foto1],
            status: 'concluido'
        },

        {
            id: 2,
            categoria: 'Institucional',
            titulo: 'MOONRUCHI',
            descricao: 'Site para produtora de audiovisual.',
            imagem: foto2,
            sites: [foto2],
            status: 'concluido'
        },

        {
            id: 3,
            categoria: 'Landing Page',
            titulo: 'BARBER 21',
            descricao: 'Landing page para barbearia premium.',
            imagem: foto3,
            sites: [foto3],
            status: 'concluido'
        },


        // ================= EM DESENVOLVIMENTO =================

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


    // =====================================================
    // CATEGORIAS
    // =====================================================

    const categorias = [
        'Todos',
        'Portfólio',
        'Design',
        'Landing Page',
        'Institucional'
    ]


    // =====================================================
    // FILTRO
    // =====================================================

    const cardsFiltrados =
        filtro === 'Todos'
            ? cards
            : cards.filter(card => card.categoria === filtro)


    // =====================================================
    // ABRIR MODAL
    // =====================================================

    const abrirModal = (card) => {
        setCardSelecionado(card)
        setModalAberto(true)
    }


    // =====================================================
    // FECHAR MODAL
    // =====================================================

    const fecharModal = () => {
        setModalAberto(false)
        setCardSelecionado(null)
    }


    return (

        <>

            {/* =====================================================
                MODAL
            ===================================================== */}

            {modalAberto && cardSelecionado && (

                <div
                    className="modal-overlay"
                    onClick={fecharModal}
                >

                    <div
                        className="modal"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* BOTÃO FECHAR */}

                        <button
                            className="modal-close"
                            onClick={fecharModal}
                            aria-label="Fechar"
                        >
                            ✕
                        </button>


                        {/* TÍTULO */}

                        <h2>
                            {cardSelecionado.titulo}
                        </h2>


                        {/* DESCRIÇÃO */}

                        <p>
                            {cardSelecionado.descricao}
                        </p>


                        {/* =================================================
                            PROJETO EM DESENVOLVIMENTO
                        ================================================= */}

                        {cardSelecionado.status === 'dev' ? (

                            <div className="em-dev">

                                🚧

                                <span>
                                    Projeto em desenvolvimento
                                </span>

                            </div>

                        ) : (

                            /* =================================================
                               IMAGENS DO PROJETO
                            ================================================= */

                            <div className="modal-images">

                                {cardSelecionado.sites?.map(
                                    (img, index) => (

                                        <img
                                            key={index}
                                            src={img}
                                            alt={`${cardSelecionado.titulo} ${index + 1}`}
                                        />

                                    )
                                )}

                            </div>

                        )}

                    </div>

                </div>

            )}


            {/* =====================================================
                SEÇÃO PORTFÓLIO
            ===================================================== */}

            <section className="portfolio">


                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="portfolio-header">


                    {/* TÍTULO */}

                    <div className="tittle-section">

                        <h1>
                            Meu Portfólio
                        </h1>

                        <p>
                            Explore meus projetos recentes e veja
                            como posso transformar sua visão em
                            realidade digital.
                        </p>

                    </div>


                    {/* =================================================
                        FILTROS
                    ================================================= */}

                    <div className="portfolio-filtros">

                        {categorias.map((item) => (

                            <button
                                key={item}
                                className={
                                    filtro === item
                                        ? 'ativo'
                                        : ''
                                }
                                onClick={() =>
                                    setFiltro(item)
                                }
                            >
                                {item}
                            </button>

                        ))}

                    </div>

                </div>


                {/* =====================================================
                    CARDS
                ===================================================== */}

                <div className="portfolio-cards">


                    {cardsFiltrados.map((card) => (

                        <div
                            className="portfolio-card"
                            key={card.id}
                        >


                            {/* =================================================
                                BADGE EM BREVE
                            ================================================= */}

                            {card.status === 'dev' && (

                                <span className="badge-dev">
                                    Em breve
                                </span>

                            )}


                            {/* =================================================
                                TÍTULO
                            ================================================= */}

                            <h2>
                                {card.titulo}
                            </h2>


                            {/* =================================================
                                IMAGEM
                            ================================================= */}

                            <img
                                src={card.imagem}
                                alt={`Projeto ${card.titulo}`}
                            />


                            {/* =================================================
                                BOTÃO
                            ================================================= */}
                            <div className="button-2 btn-portfolio">
                                <button
                                    className="button2"
                                    onClick={() =>
                                        abrirModal(card)
                                    }
                                >
                                    VER DETALHES
                                </button>
                            </div>


                        </div>

                    ))}


                </div>

            </section>

        </>

    )
}


export default Section1