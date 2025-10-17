import { useState, useEffect, useRef } from 'react'
import '../styles/home.css'

function Footer() {
  const [open, setOpen] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    // prevent background scroll when modal open
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  function handleOverlayClick(e) {
    // close if click outside modal content
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setOpen(false)
    }
  }

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <p>© 2025 Gusta WebSites. Todos os direitos reservados.</p>
            <a href="#" onClick={(e) => { e.preventDefault(); setOpen(true) }}>Política de Privacidade</a>
          </div>
        </div>
      </footer>

      {open && (
        <div className="modal-overlay" onMouseDown={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="politicaPrivacidadeLabel">
          <div className="modal" ref={modalRef} onMouseDown={(e) => e.stopPropagation()}>
            <header className="modal-header">
              <h2 id="politicaPrivacidadeLabel">Política de Privacidade</h2>
              <button className="modal-close" aria-label="Fechar" onClick={() => setOpen(false)}>×</button>
            </header>
            <div className="modal-body">
              <p>Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações pessoais fornecidas por você através do formulário disponível neste site.</p>

              <h3>Coleta de Dados</h3>
              <ul>
                <li>Nome</li>
                <li>E-mail</li>
                <li>Telefone</li>
                <li>Mensagem enviada</li>
              </ul>

              <h3>Uso das Informações</h3>
              <p>Os dados fornecidos são utilizados exclusivamente para responder à sua solicitação de contato.
                Não realizamos o compartilhamento, venda ou divulgação de suas informações pessoais a terceiros.</p>

              <h3>Armazenamento dos Dados</h3>
              <p>As informações enviadas são encaminhadas diretamente para o nosso e-mail e não são armazenadas em banco de dados neste site.</p>

              <h3>Cookies</h3>
              <p>Este site utiliza apenas cookies estritamente necessários para seu funcionamento técnico.
                Não fazemos uso de cookies de rastreamento, publicidade ou análise de comportamento.</p>

              <h3>Seus Direitos</h3>
              <ul>
                <li>Confirmar a existência de tratamento de dados pessoais</li>
                <li>Acessar as informações que possuímos sobre você</li>
                <li>Corrigir dados incorretos, incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de suas informações pessoais.</li>
              </ul>

              <h3>Contato</h3>
              <p>Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail:<strong>gustawebsites@gmail.com</strong></p>

              <p className="muted">Última atualização: 18 de outubro de 2025</p>
            </div>
            <footer className="modal-footer">
              <button className="btn-primary" onClick={() => setOpen(false)}>Fechar</button>
            </footer>
          </div>
        </div>
      )}
    </>
  )
}

export default Footer
