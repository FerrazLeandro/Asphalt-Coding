import { Link } from "react-router-dom"

function Sobre () {
    return (
        <>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/consulta'>Consulta</Link>
            </li>
            <li>
                <Link to='/cadastro'>Cadastro</Link>
            </li>
        </ul>
            <h1>Sobre</h1>
    </>
    )
}

export default Sobre