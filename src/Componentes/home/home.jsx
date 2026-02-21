import '../../styles/home.css'

import eu from '../../img/eu-v6.png'
import { Link } from 'react-scroll'

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
                    <div className="buttons-section1">
                        <Link to="portfolio" smooth duration={500} offset={-0}>
                            <div className="button-1">
                                <button className='button1'>Ver Portifólio</button>
                            </div>
                        </Link>

                        <Link to="contato" smooth duration={500} offset={80}>
                            <div className="borda-button-2">
                                <div className="button-2">
                                    <button className='button2'>Fale Comigo</button>
                                </div>
                            </div>
                        </Link>


                    </div>

                </div>
                <div className="container-img">
                    <div className="img-wrapper">
                        <img src={eu} alt="eu" />

                        <div className="img-hover">
                            <h4>Sobre Mim</h4>
                            <p>
                                Desenvolvedor web especializado em criar soluções digitais
                                personalizadas que impulsionam negócios e marcas.
                                Combinando design criativo e tecnologia de ponta para
                                resultados excepcionais.
                            </p>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Section1
