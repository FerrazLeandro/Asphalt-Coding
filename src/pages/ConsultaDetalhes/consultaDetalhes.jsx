import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import './consultaDetalhes.css'
import api from "../../services/api"
import Modal from "../../components/Modal/Modal";


function ConsultaDetalhes() {
    const { state } = useLocation()
    const [item, setItem] = useState(state.data)
    const [modelo, setModelo] = useState("")
    const [modeloAlterado, setModeloAlterado] = useState(item.modelo)
    const [marca, setMarca] = useState("")
    const [marcaAlterado, setMarcaAlterado] = useState(item.marca)
    const [valor, setValor] = useState("")
    const [valorAlterado, setValorAlterado] = useState(item.valor)
    const [ano, setAno] = useState("")
    const [anoAlterado, setAnoAlterado] = useState(item.ano)
    const [foto, setFoto] = useState("")
    const [fotoAlterado, setFotoAlterado] = useState(item.foto)
    const [mensagem, setMensagem] = useState("")

    useEffect(() => {
    }, [])

    const deletarItem = async () => {
        await api.delete(`/produtos/${item.id}`)
    }

    const getItem = async () => {
        const { data } = await api.get(`/produtos/${item.id}`)
        setItem(data)
    }

    const atualizarItem = async () => {
        const itemAtualizado = {
            marca: marcaAlterado,
            modelo: modeloAlterado,
            ano: anoAlterado,
            valor: valorAlterado,
            foto: fotoAlterado
        }
        await api.put(`/produtos/${item.id}`, itemAtualizado)
        getItem();
        setMensagem("Dados atualizados com sucesso!")
    }

    return (
        <>
            <Header />
            <div className="container">
                <form>
                    <div className="form-row">
                        <img src={item.foto} className="card-img-top" alt="carros" />
                        <div className="form-group col-md-9">
                            <label htmlFor="modelo">Modelo</label>
                            <input type="text" className="form-control" id="modelo" placeholder={item.modelo} onChange={e => setModeloAlterado(e.target.value)} value={modeloAlterado} />
                        </div>
                        <div className="form-group col-md-9">
                            <label htmlFor="marca">Marca</label>
                            <input type="text" className="form-control" id="marca" placeholder={item.marca} onChange={e => setMarcaAlterado(e.target.value)} value={marcaAlterado} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="valor">Valor</label>
                            <input type="text" className="form-control" id="valor" placeholder={item.valor} onChange={e => setValorAlterado(e.target.value)} value={valorAlterado} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="ano">Ano</label>
                            <input type="text" className="form-control" id="ano" placeholder={item.ano} onChange={e => setAnoAlterado(e.target.value)} value={anoAlterado} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="ano">Foto</label>
                            <input type="text" className="form-control" id="foto" placeholder={item.foto} onChange={e => setFotoAlterado(e.target.value)} value={fotoAlterado} />
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={atualizarItem}>Atualizar</button>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={deletarItem}>Excluir</button>
                </form>
            </div>
            <Modal />
            <Footer />
        </>
    )
}

export default ConsultaDetalhes