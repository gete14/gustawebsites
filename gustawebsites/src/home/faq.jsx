import { useState } from 'react'
import '../styles/home.css'

function Faq() {
    const faqs = [
        {
            question: "Quanto tempo leva para desenvolver um site?",
            answer: "O tempo de desenvolvimento varia conforme a complexidade do projeto, mas geralmente leva entre 2 a 6 semanas."
        },
        {
            question: "Quais informações são necessárias para iniciar o desenvolvimento?",
            answer: "Para iniciar o desenvolvimento, preciso de detalhes sobre o objetivo do site, público-alvo, funcionalidades desejadas, referências visuais e conteúdo a ser incluído."
        },
        {
            question: "Vocês oferecem suporte após o lançamento do site?",
            answer: "Sim, oferecemos pacotes de suporte e manutenção para garantir que seu site permaneça atualizado, seguro e funcionando corretamente após o lançamento."
        },
        
    ]


    return (
        <>
            <div className="container-faq">
                <h2>FAQ</h2>
                <div className="faqs">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Faq
