import { Link } from "react-router-dom"

function Erro() {
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
                <li>
                    <Link to='/sobre'>Sobre</Link>
                </li>
            </ul>
            <h1>Erro 404</h1>
        </>
    )
}

export default Erro