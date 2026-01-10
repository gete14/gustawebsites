import { useState } from 'react'
import '../styles/faq.css'
import { FiChevronDown } from "react-icons/fi";

function Faq() {

    const [ativo, setAtivo] = useState(null)

    const faqs = [
        {
            pergunta: 'Quanto tempo leva para desenvolver um site?',
            resposta:
                'O prazo varia conforme a complexidade do projeto, mas em média leva entre 7 e 20 dias.'
        },
        {
            pergunta: 'Você faz manutenção após o lançamento?',
            resposta:
                'Sim. Ofereço planos de suporte e manutenção para garantir que seu site esteja sempre atualizado.'
        },
        {
            pergunta:
                'Você realiza atualizações no site separadamente, mesmo sem a contratação de um plano mensal?',
            resposta:
                'Sim, realizo atualizações pontuais sob demanda, sem necessidade de plano mensal.'
        },
        {
            pergunta: 'É você que cuida de tudo?',
            resposta:
                'Sim. Eu cuido de todo o processo: design, desenvolvimento, publicação e suporte.'
        },
        {
            pergunta: 'Tem como parcelar?',
            resposta:
                'Sim. O pagamento pode ser parcelado conforme o escopo do projeto.'
        }
    ]

    const toggleFaq = (index) => {
        setAtivo(ativo === index ? null : index)
    }

    return (
        <section className="faq">
            <div className="faq-header">
                <h1>Perguntas Frequentes</h1>
                <p>
                    Tire suas dúvidas sobre desenvolvimento web e como posso ajudar
                    seu negócio a crescer online.
                </p>
            </div>

            <div className="faq-container">
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${ativo === index ? 'ativo' : ''}`}
                        onClick={() => toggleFaq(index)}
                    >
                        <div className="faq-pergunta">
                            <span>{item.pergunta}</span>
                            <span className="seta">
                                <FiChevronDown size={22} />
                            </span>
                        </div>

                        {ativo === index && (
                            <div className="faq-resposta">
                                <p>{item.resposta}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Faq
