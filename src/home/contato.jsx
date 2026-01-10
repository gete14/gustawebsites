import '../styles/contato.css'
import { FaWhatsapp, FaInstagram, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Contato() {
    return (
        <section className="contato">
            <div className="contato-header">
                <h1>Entre em Contato</h1>
                <p>
                    Pronto para levar seu negócio para o próximo nível?
                    Envie sua mensagem ou solicite um orçamento sem compromisso.
                </p>
            </div>

            <div className="contato-container">
                {/* Lado esquerdo */}
                <div className="contato-info">
                    <h2>Vamos conversar sobre seu projeto</h2>
                    <p>
                        Estou disponível para discutir suas ideias, responder perguntas
                        e criar a solução perfeita para suas necessidades online.
                    </p>

                    <ul>
                        <li>
                            <FaWhatsapp />
                            <span>+55 11 94002-8922</span>
                        </li>
                        <li>
                            <FaClock />
                            <span>Seg à Sex 08:00 às 20:00</span>
                        </li>
                        <li>
                            <FaMapMarkerAlt />
                            <span>Atendimento para todo o Brasil</span>
                        </li>
                    </ul>

                    <div className="redes">
                        <h3>Redes Sociais</h3>
                        <div className="icons">
                            <a href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="#" aria-label="WhatsApp">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Lado direito */}
                <form className="contato-form">
                    <h1>Formulário</h1>
                    <label>Digite seu Nome:</label>
                    <input type="text" placeholder="Seu Nome" />

                    <label>Digite seu email:</label>
                    <input type="email" placeholder="Seu Email" />

                    <label>Telefone:</label>
                    <input type="tel" placeholder="Seu Telefone (WhatsApp)" />

                    <label>Informações Adicionais:</label>
                    <textarea placeholder="Sua Mensagem..."></textarea>

                    <button type="submit">Enviar Mensagem</button>
                </form>
            </div>
        </section>
    )
}

export default Contato
