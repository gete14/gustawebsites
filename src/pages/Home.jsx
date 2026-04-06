import { StrictMode } from 'react'  
import Section1 from '../Componentes/home/home.jsx'
import SectionServicos from '../Componentes/home/servicos.jsx'
import SobreMim from '../Componentes/home/sessao-sobre.jsx'
import SectionOrcamento from '../Componentes/Orcamento/orcamento.jsx'
import { useState } from "react";


export default function Home() {
    const [modal, setModal] = useState(false);
    return (
        <>
            <StrictMode>
                <Section1 setModal={setModal}/>
                <SectionServicos />
                <SectionOrcamento modal={modal} setModal={setModal}/>
                <SobreMim setModal={setModal}/>
            </StrictMode>
        </>
    );
}
