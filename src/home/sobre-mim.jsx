import { useEffect, useRef, useState } from 'react'
import '../styles/pages-acima-1024/sobre-mim.css'
import '../styles/responsividade-481-1024/sobre-mim.css'
import '../styles/responsividade-480/sobre-mim.css'

function Sobremim() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div className="container" id='Sobre-mim'>
            <div
                ref={sectionRef}
                className={`container-sobremim ${isVisible ? 'visible' : ''}`}
            >
                <h2 className="titulo-sobremim">Sobre Mim</h2>
                <div className="sobremim-card">
                    <p>
                        Sou desenvolvedor <strong>full-stack</strong> apaixonado por tecnologia e inovação.
                        Com experiência em <strong>front-end</strong> e <strong>back-end</strong>, crio soluções digitais completas —
                        desde interfaces modernas e responsivas até sistemas robustos e escaláveis.
                        Tenho domínio em diversas linguagens e frameworks, sempre buscando aprender e aplicar
                        as melhores práticas do mercado.
                        Meu objetivo é <strong>transformar ideias em produtos funcionais</strong>, entregando valor e qualidade
                        para cada projeto.
                    </p>
                </div>
            </div>

        </div>

    )
}

export default Sobremim
