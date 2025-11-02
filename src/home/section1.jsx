import '../styles/pages-acima-1024/section1.css'
import '../styles/responsividade-481-1024/section1.css'
import '../styles/responsividade-480/section1.css'
import eu from '../img/eu.jpeg'

function Section1() {

    return (
        <>
            <div className="section1">
                <div className="container-text">
                    <div className="text">
                        <h2 className='Título-principal'>
                            Não importa o nicho do seu <h1 className='Título-principal negocio'>NEGÓCIO</h1>
                        </h2>
                        <p className='Subtítulos'>Eu crio sites modernos, rapidos e responsivos para o seu negocio se destacar online.</p>
                    </div>
                    <div className="button">
                        <button>Solicitar Orçamento</button>
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
