import { StrictMode } from 'react'  
import Section1 from '../../components/sections/Hero/Hero.jsx'
import SectionCarrossel from '../../components/sections/Hero/CarrosselPortfolio.jsx'
import FAQ from '../../components/sections/Hero/FAQ.jsx'
import SobreMim from '../../components/sections/Hero/Sobre.jsx'
import SectionOrcamento from '../../components/sections/Orcamento/Orcamento.jsx'
import SectionProcesso from '../../components/sections/Hero/Processo.jsx'
import { useState } from "react";


export default function Home() {
    const [modal, setModal] = useState(false);
    return (
        <>
            <StrictMode>
                <Section1 setModal={setModal}/>
                <SectionCarrossel />
                <SectionProcesso />
                <SectionOrcamento modal={modal} setModal={setModal}/>
                <SobreMim setModal={setModal}/>
                <FAQ />
            </StrictMode>
        </>
    );
}
