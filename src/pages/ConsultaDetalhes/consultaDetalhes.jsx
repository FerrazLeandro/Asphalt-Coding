import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Footer from "../../components/Footer/footer"
import Formulario from "../../components/Formulario/formulario";
import Header from "../../components/Header/header"

function ConsultaDetalhes() {
    const { state } = useLocation()
    console.log("Detalhes ", state.data)

    
    useEffect(() => {
        console.log( "Use efect", state.data.modelo)
    }, [])
   
    return (
        <>
            <Header />
            <h1></h1>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="modelo">Modelo</label>
                        <input type="text" className="form-control" id="modelo" placeholder="Modelo" value={state.data.modelo} defaultValue="Não identificado"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="marca">Marca</label>
                        <input type="text" className="form-control" id="marca" placeholder="Marca" value={state.data.marca} defaultValue="Não identificado"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="valor">Valor</label>
                        <input type="number" className="form-control" id="valor" placeholder="Valor" value={state.data.valor} defaultValue="Não identificado"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="ano">Ano</label>
                        <input type="number" className="form-control" id="ano" placeholder="Ano" value={state.data.ano} defaultValue="Não identificado"/>
                    </div>
                    <img src={state.data.foto} className="card-img-top" alt="carros" />
                </div>
                <button type="submit" className="btn btn-primary">Atualizar</button>
                <button type="submit" className="btn btn-primary">Excluir</button>
            </form>
            <Footer />
        </>
    )
}

export default ConsultaDetalhes