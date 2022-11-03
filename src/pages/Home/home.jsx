import './home.css'
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
        <ul>
            <li>
                <Link to='/consulta'>Consulta</Link>
            </li>
            <li>
                <Link to='/cadastro'>Cadastro</Link>
            </li>
            <li>
                <Link to='/sobre'>Sobre</Link>
            </li>
        </ul>
            <h1>Home</h1>
    </>
    )
}

export default Home