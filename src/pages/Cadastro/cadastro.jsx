import { Link } from "react-router-dom"

function Cadastro () {
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
                <Link to='/sobre'>Sobre</Link>
            </li>
        </ul>
            <h1>Cadastro</h1>
    </>
    )
}

export default Cadastro