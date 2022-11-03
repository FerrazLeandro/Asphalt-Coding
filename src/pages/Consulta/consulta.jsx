import { Link } from "react-router-dom"

function Consulta () {
    return (
        <>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/cadastro'>Cadastro</Link>
            </li>
            <li>
                <Link to='/sobre'>Sobre</Link>
            </li>
        </ul>
            <h1>Consulta</h1>
    </>
    )
}

export default Consulta