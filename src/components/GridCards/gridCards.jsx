import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Busca from "../Busca/busca";
import api from "../../services/api";
import './gridCards.css'

function GridCards() {
    const [item, setItem] = useState([])
    const [itemFiltrado, setItemFiltrado] = useState(item)
    const [busca, setBusca] = useState('')

    useEffect(() => {
        const resultados = itemFiltrado.filter(carro =>
            carro.modelo.toLowerCase().includes(busca.toLowerCase()))
        setItem(resultados)
    }, [busca])

    useEffect(() => {
        getItem();
    }, [])

    const deletarItem = async (id) => {
        await api.delete(`/produtos/${id}`)
        getItem();
    }

    const getItem = async () => {
        const { data } = await api.get("/produtos")
        setItem(data)
        setItemFiltrado(data)
    }

    return (
        <>
            <Busca
                value={busca}
                onChange={(search) => setBusca(search)}
            />
            <div className="container-fluid w-100 p-3 align-items-center" >
                {item.length > 0 ? (
                    <>
                        {item.map((carro) =>
                            <div className="card" style={{ width: "18rem" }} key={carro.id}>
                                <img src={carro.foto} className="card-img-top" alt="Imagem do carro" />
                                <div className="card-body">
                                    <h4 className="card-title">{carro.modelo}</h4>
                                    <h5 className="card-text">{carro.marca}</h5>
                                    <h5 className="card-text">Ano: {carro.ano}</h5>
                                    <h5 className="card-text">R$: {carro.valor}</h5>
                                    <Link className="btn btn-lg btn-primary" to={`/consultaDetalhes`} state={{ data: carro }}>Detalhes</Link>
                                    <button type="button" className="btn btn-lg btn-danger" onClick={(e) => (deletarItem(carro.id))}>Excluir</button>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <p></p>
                )}
            </div>
        </>
    )
}

export default GridCards