import { useState } from 'react'
import '../styles/home.css'

function Planos() {
    const planos = [
        {
            nome: 'Plano Essencial',
            preco: 'R$ 499',
            recursos: [
                'Site responsivo',
                'Até 5 páginas',
                'Suporte por e-mail',
            ],
        },
        {
            nome: 'Plano Profissional',
            preco: 'R$ 899',
            recursos: [
                'Site responsivo',
                'Até 15 páginas',
                'Suporte por e-mail e telefone',
                'Otimização SEO básica',
            ],
        },
        {
            nome: 'Plano Premium',
            preco: 'R$ 1499',
            recursos: [
                'Site responsivo',
                'Páginas ilimitadas',
                'Suporte 24/7',
                'Otimização SEO avançada',
                'Integração com redes sociais',
            ],
        },
    ]
    return (
        <>
            <div className="container-planos">
                <h2>Planos</h2>
                <div className="planos">
                    {planos.map((plano, index) => (
                        <div className="plano" key={index}>
                            <h3>{plano.nome}</h3>
                            <p className="preco">{plano.preco}</p>
                            <ul>
                                {plano.recursos.map((recurso, idx) => (
                                    <li key={idx}>{recurso}</li>
                                ))}
                            </ul>
                            <div className="button">
                                <button>Escolher Plano</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Planos
