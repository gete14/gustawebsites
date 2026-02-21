import '../../styles/servicos.css'
import { FiMonitor, FiSmartphone, FiDollarSign   } from "react-icons/fi";


function Section1() {

    const servicos = [
        {
            icon: <FiMonitor size={30}/>,
            titulo: "Desenvolvimento Web",
            descricao: "Criação de sites modernos, responsivos e focados em performance para destacar seu negócio na internet."
        },
        {
            icon: <FiSmartphone size={30}/>,
            titulo: "Design UI/UX",
            descricao: "Interfaces intuitivas e atraentes que melhoram a experiência do usuário e aumentam conversões."
        },
        {
            icon: <FiDollarSign size={30}/>,
            titulo: "Otimização e SEO",
            descricao: "Melhoria de desempenho e visibilidade nos buscadores para atrair mais clientes."
        }
    ]

    return (
        <>
        <section className='servicos'>
            <div className="tittle-section" id='servicos'>
                <h1>Meus Serviços</h1>
                <span className='linha'></span>
                <p>
                    Crio experiências digitais únicas, combinando design moderno,
                    performance e visibilidade online que convertem clientes.
                </p>
            </div>

            <div className="container-cards">
                {servicos.map((servico, index) => (
                    <div className="card-servico" key={index}>
                        <div className="icon">{servico.icon}</div>
                        <h3>{servico.titulo}</h3>
                        <p>{servico.descricao}</p>
                    </div>
                ))}
            </div>
            </section>
        </>
    )
}

export default Section1
