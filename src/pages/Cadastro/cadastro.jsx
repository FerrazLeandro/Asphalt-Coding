import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import api from "../../services/api"
import './cadastro.css'

function Cadastro() {
    const { state } = useLocation()
    const [item, setItem] = useState(state)
    const [modelo, setModelo] = useState("")
    const [marca, setMarca] = useState("")
    const [valor, setValor] = useState("")
    const [ano, setAno] = useState("")
    const [foto, setFoto] = useState("")

    useEffect(() => {
    }, [])


    const cadastrarItem = async () => {
        const itemAtualizado = {
            marca: marca,
            modelo: modelo,
            ano: ano,
            valor: valor,
            foto: foto
        }
        console.log("Passou no post", itemAtualizado)
        await api.post(`/produtos/`, itemAtualizado)
    }



    return (
        <>
            <Header />
            <div className="container">
                <form>
                    <div className="form-row">
                        <img src={foto} className="card-img-top" alt="Imagem do carro" />
                        <div className="form-group col-md-9">
                            <label htmlFor="modelo">Modelo</label>
                            <input type="text" className="form-control" id="modelo" placeholder="Modelo" onChange={e => setModelo(e.target.value)} />
                        </div>
                        <div className="form-group col-md-9">
                            <label htmlFor="marca">Marca</label>
                            <input type="text" className="form-control" id="marca" placeholder="Marca" onChange={e => setMarca(e.target.value)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="valor">Valor</label>
                            <input type="text" className="form-control" id="valor" placeholder="Valor" onChange={e => setValor(e.target.value)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="ano">Ano</label>
                            <input type="text" className="form-control" id="ano" placeholder="Ano" onChange={e => setAno(e.target.value)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="ano">Foto</label>
                            <input type="text" className="form-control" id="foto" placeholder="Url da foto" onChange={e => setFoto(e.target.value)} />
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={cadastrarItem}>Cadastrar</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Cadastro