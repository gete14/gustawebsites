

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Section1 from './home/section1'
import Header from './home/header'
import Planos from './home/planos'
import Faq from './home/faq'
import Footer from './home/footer'
import Sobremim from './home/sobre-mim'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Section1/>
    <Planos/>
    <Sobremim/>
    <Faq/>
    <Footer/>
  </StrictMode>,
)
