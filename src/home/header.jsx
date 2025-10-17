import { useState } from 'react'
import '../styles/home.css'

function Header() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="container-header">
                <div className="container-logo">
                    <h2>Gusta</h2>
                    <h5>Websites</h5>
                </div>
                <div className="container-nav">
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Planos</a></li>
                            <li><a href="#">Sobre mim</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Header
