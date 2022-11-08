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
            carro.veiculo.toLowerCase().includes(busca.toLowerCase()))
        setItem(resultados)
    }, [busca])

    useEffect(() => {
        getItem();
    }, [])

    const deletarItem = async (id) => {
        await api.delete(`/carros/${id}`)
        getItem();
    }

    const getItem = async () => {
        const { data } = await api.get("/carros")
        setItem(data)
        setItemFiltrado(data)
    }

    return (
        <>
            <div className="cartoes">
                <Busca
                    value={busca}
                    onChange={(search) => setBusca(search)}

                />
                <div className="container-fluid w-100 p-3 align-items-center" >
                    {item.length > 0 ? (
                        <>
                            {item.map((carro) =>
                                <div className="card" style={{ width: "18rem" }} key={carro.id}>
                                    <img className="card-imagem card-img-top" src={carro.foto} alt="Imagem do carro" />
                                    <div className="card-body">
                                        <h4 className="card-title">{carro.veiculo}</h4>
                                        <h5 className="card-title">{carro.modelo}</h5>
                                        <h5 className="card-text">{carro.fabricante}</h5>
                                        <h5 className="card-text">Ano: {carro.ano}</h5>
                                        <h5 className="card-text">R$: {carro.valor}</h5>
                                        <Link className="btn btn-lg btn-primary" to={`/consultaDetalhes`} state={{ data: carro }}>Detalhes</Link>
                                        <button type="button" className="btn btn-lg btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => (deletarItem(carro.id))}>Excluir</button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <p>Carregando ...</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default GridCards