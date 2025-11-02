import { StrictMode } from 'react'
import Section1 from './section1'
import Header from './header'
import Planos from './planos'
import Faq from './faq'
import Footer from './footer'
import Sobremim from './sobre-mim'
import Etapas from './etapas'
import Checklist from './checklist'
function Body() {

    return (
        <>
            <body>
                <StrictMode>
                    <Header />
                    <Section1 />
                    <Etapas />
                    <Planos />
                    <Checklist />
                    <Faq />
                    <Sobremim />
                    <Footer />
                </StrictMode>
            </body>
        </>
    )
}

export default Body


