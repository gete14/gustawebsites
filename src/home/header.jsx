import { useState } from 'react'
import '../styles/home.css'
import logo from '../../public/logo-navbar-desktop.svg'

function Header() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="container-header">
                <div className="container-logo">
                    <img src={logo} alt="Logo GustaWebsites" className='logo'/>
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
