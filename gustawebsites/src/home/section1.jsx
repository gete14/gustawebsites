import { useState } from 'react'
import '../styles/home.css'
import leptop from '../img/leptop.png'

function Section1() {

    return (
        <>
            <div className="section1">
                <div className="container-text">
                    <div className="text">
                        <h1>
                            Transforme sua ideia em um site profissional
                        </h1>
                        <p>Eu crio sites modernos, rapidos e responsivos para o seu negocio se destacar online.</p>
                    </div>
                    <div className="button">
                        <button>Solicitar Orçamento</button>
                    </div>
                </div>
                <div className="container-img">
                    <img src={leptop} alt="leptop" />
                </div>
            </div>

        </>
    )
}

export default Section1
