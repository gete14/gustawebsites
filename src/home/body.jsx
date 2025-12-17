import { StrictMode } from 'react'
import Section1 from './section1'
import Header from './header'
import Planos from './planos'
import Faq from './faq'
import Footer from './footer'
import Sobremim from './sobre-mim'
import Etapas from './etapas'
import Checklist from './checklist'
import WhatsAppButton from './wpp'

import "../styles/body.css";


function Body() {

    return (
        <>
            <StrictMode>
                <Header />
                <Section1 />
                    <Etapas />
                    <Planos />
                    <WhatsAppButton />
                {/* <Checklist /> */}
                {/* <Faq /> */}
                {/* <Sobremim /> */}
                <Footer />
            </StrictMode>
        </>
    )
}


export default Body


