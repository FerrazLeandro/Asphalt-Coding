import './header.css'
import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Ecommerce React</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/consulta'>Consulta</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/cadastro'>Cadastro</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/sobre'>Sobre</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header