import { useState } from 'react';
import '../styles/pages-acima-1024/faq.css'
import '../styles/responsividade-481-1024/faq.css'
import '../styles/responsividade-480/faq.css'

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

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
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container" id='FAQ'>
        <div className="container-faq">
      <h2>FAQ</h2>
      <div className="faqs">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggleFaq(index)}
          >
            <h3 className="faq-question">{faq.question}</h3>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? '200px' : '0',
                opacity: activeIndex === index ? 1 : 0
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        
    </div>
    
  );
}

export default Faq;
