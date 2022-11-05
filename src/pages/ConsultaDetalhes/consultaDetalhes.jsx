import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Footer from "../../components/Footer/footer"
import Formulario from "../../components/Formulario/formulario";
import Header from "../../components/Header/header"
import './consultaDetalhes.css'
import api from "../../services/api"

function ConsultaDetalhes() {
    const { state } = useLocation()
    const [item, setItem] = useState(state.data)
    const [modelo, setModelo] = useState("")
    const [marca, setMarca] = useState("")
    const [valor, setValor] = useState("")
    const [ano, setAno] = useState("")
    const [status, setStatus] = useState("")

    
    useEffect(() => {
        console.log( "Use efect", item)

        
    }, [])
    
    const deletarItem = async () => {
        await api.delete(`/produtos/${item.id}`)
        setItem("")
        setModelo("")
        setMarca("")
        setValor("")
        setAno("")
        setStatus("")
    }

    const atualizarItem = async () => {
       // const { data } = await api.put("/produtos/1")
        console.log("Passou no delete", item)
    }
   
    return (
        <>
            <Header />
            <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="modelo">Modelo</label>
                        <input type="text" className="form-control" id="modelo" placeholder="Modelo" value={item.modelo} defaultValue="Não identificado" onChange={e => setModelo(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="marca">Marca</label>
                        <input type="text" className="form-control" id="marca" placeholder="Marca" value={item.marca} defaultValue="Não identificado" onChange={e => setMarca(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="valor">Valor</label>
                        <input type="text" className="form-control" id="valor" placeholder="Valor" value={item.valor} defaultValue="Não identificado" onChange={e => setValor(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="ano">Ano</label>
                        <input type="text" className="form-control" id="ano" placeholder="Ano" value={item.ano} defaultValue="Não identificado" onChange={e => setAno(e.target.value)}/>
                    </div>
                    <img src={item.foto} className="card-img-top" alt="carros" />
                </div>
                <button type="button" className="btn btn-primary" onClick={atualizarItem}>Atualizar</button>
                <button type="button" className="btn btn-primary"onClick={deletarItem}>Excluir</button>
            </form>
            </div>
            <Footer />
        </>
    )
}

export default ConsultaDetalhes