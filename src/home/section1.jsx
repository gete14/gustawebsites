import '../styles/section1.css'

import eu from '../img/eu3.png'

function Section1() {

    return (
        <>
            <div className="section1">
                <div className="container-text">
                    <div className="text">
                        <h1 className='Título-principal-section1'>
                            NÃO IMPORTA O NICHO DO SEU <p className='Título-principal negocio'>NEGÓCIO</p>
                        </h1>
                        <p className='Subtítulos-section1'>Eu crio sites modernos, rapidos e responsivos para o seu negocio se destacar online.</p>
                    </div>
                    <div className="button-section1">
                        <button >Solicitar Orçamento</button>
                    </div>
                </div>
                <div className="container-img">
                    <img src={eu} alt="leptop" />
                </div>
            </div>

        </>
    )
}

export default Section1
