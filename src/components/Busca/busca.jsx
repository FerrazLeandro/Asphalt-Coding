import { Link } from "react-router-dom";
import { FaCar } from 'react-icons/fa';
import './busca.css'

const Busca = ({ value, onChange }) => {

    function handleChange(event) {
        onChange(event.target.value)

    }

    return (
        <div className="container">
            <form className="d-flex" role="search">
                <input
                    className="caixa-pesquisa form-control me-2"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Search"
                    value={value}
                    onChange={handleChange}
                />
                <Link className="botao-cadastrar btn btn-lg btn-primary" to={`/cadastro`}><FaCar />Cadastrar</Link>
            </form>
        </div>
    );
}

export default Busca;