import { StrictMode } from 'react'
import Section1 from './section1'
import Header from './header'
import Planos from './planos'
import Faq from './faq'
import Footer from './footer'
import Servicos from './servicos'
import Portfolio from './portfolio'
import Contato from './contato'
import WhatsAppButton from './wpp'

import "../styles/body.css";


function Body() {

    return (
        <>
            <StrictMode>
                <div className="layout">
                    <Header />
                    <Section1 />
                    <Servicos />
                    <Portfolio />
                    <Planos />
                    <Faq />
                    <Contato />
                    <WhatsAppButton />
                </div>
                <Footer />
            </StrictMode>
        </>
    )
}


export default Body


