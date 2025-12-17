import '../styles/home.css'
import '../styles/checklist.css'
import React, { useState } from "react";

export default function Checklist() {
    const [opcoesSelecionadas, setOpcoesSelecionadas] = useState([]);

    const opcoes = [
        "Aumentar a credibilidade do meu negócio na internet.",
        "Transformar mais visitantes em clientes.",
        "Facilitar o contato para não perder mais vendas.",
        "Vender meus produtos online, 24 horas por dia.",
        "Otimizar o tempo da equipe com processos automáticos.",
        "Ter uma presença online que me destaque da concorrência.",
    ];

    const handleCheck = (opcao) => {
        if (opcoesSelecionadas.includes(opcao)) {
            setOpcoesSelecionadas(opcoesSelecionadas.filter((item) => item !== opcao));
        } else {
            setOpcoesSelecionadas([...opcoesSelecionadas, opcao]);
        }
    };

    const handleSubmit = () => {
        if (opcoesSelecionadas.length > 0) {
            alert(`Você selecionou:\n\n${opcoesSelecionadas.join("\n")}`);
        } else {
            alert("Escolha pelo menos uma opção antes de continuar.");
        }
    };

    return (
        <div className="container">
            <div className="checklist-container">
                <h2 className='Título-principal'>
                    Você precisa de um SITE?                   
                </h2>

                <div className="checklist-box">
                    {opcoes.map((opcao, index) => (
                        <label key={index} className="custom-check">
                            <input
                                type="checkbox"
                                checked={opcoesSelecionadas.includes(opcao)}
                                onChange={() => handleCheck(opcao)}
                            />
                            <span className="checkmark"></span>
                            {opcao}
                        </label>
                    ))}
                    <div className="button">
                        <button onClick={handleSubmit}>Quero um Orçamento</button>
                    </div>
                    
                </div>
            </div>

        </div>

    );
}
