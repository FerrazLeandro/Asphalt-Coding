import { useState } from "react";
import { useLocation } from "react-router-dom";
import './formularioDetalhes.css'
import api from "../../services/api"


function FormularioConsultaDetalhes() {
    const { state } = useLocation()
    const [item, setItem] = useState(state.data)
    const [veiculo, setVeiculo] = useState("")
    const [veiculoAlterado, setVeiculoAlterado] = useState(item.veiculo)
    const [modelo, setModelo] = useState("")
    const [modeloAlterado, setModeloAlterado] = useState(item.modelo)
    const [marca, setMarca] = useState("")
    const [fabricanteAlterado, setFabricanteAlterado] = useState(item.fabricante)
    const [valor, setValor] = useState("")
    const [valorAlterado, setValorAlterado] = useState(item.valor)
    const [ano, setAno] = useState("")
    const [anoAlterado, setAnoAlterado] = useState(item.ano)
    const [foto, setFoto] = useState("")
    const [fotoAlterado, setFotoAlterado] = useState(item.foto)
    const [mensagem, setMensagem] = useState("")

    const deletarItem = async () => {
        await api.delete(`/carros/${item.id}`)
    }

    const getItem = async () => {
        const { data } = await api.get(`/carros/${item.id}`)
        setItem(data)
    }

    const atualizarItem = async () => {
        const itemAtualizado = {
            veiculo: veiculoAlterado,
            modelo: modeloAlterado,
            fabricante: fabricanteAlterado,
            ano: anoAlterado,
            valor: valorAlterado,
            foto: fotoAlterado
        }
        await api.put(`/carros/${item.id}`, itemAtualizado)
        getItem();
        setMensagem("Dados atualizados com sucesso!")
    }

    return (
        <>
            <div className="container-detalhes container mt-5">
                <form>
                    <div className="form-row">
                        <img src={item.foto} className="card-img-top w-100" alt="carros" />
                        <div className="form-group col-md-5 d-inline-block m-3">
                            <label htmlFor="veiculo">Veículo</label>
                            <input type="text" className="form-control" id="veiculo" placeholder={item.veiculo} onChange={e => setVeiculoAlterado(e.target.value)} value={veiculoAlterado} />
                        </div>
                        <div className="form-group col-md-5 d-inline-block m-3">
                            <label htmlFor="modelo">Modelo</label>
                            <input type="text" className="form-control" id="modelo" placeholder={item.modelo} onChange={e => setModeloAlterado(e.target.value)} value={modeloAlterado} />
                        </div>
                        <div className="form-group col-md-5 d-inline-block m-3">
                            <label htmlFor="fabricante">Fabricante</label>
                            <input type="text" className="form-control" id="fabricante" placeholder={item.fabricante} onChange={e => setFabricanteAlterado(e.target.value)} value={fabricanteAlterado} />
                        </div>
                        <div className="form-group col-md-1 d-inline-block m-3">
                            <label htmlFor="ano">Ano</label>
                            <input type="number" className="form-control" id="ano" placeholder={item.ano} min={2010} max={2023} onChange={e => setAnoAlterado(e.target.value)} value={anoAlterado} />
                        </div>
                        <div className="form-group col-md-2 d-inline-block m-3">
                            <label htmlFor="valor">Valor</label>
                            <input type="number" className="form-control" id="valor" min={0} placeholder={item.valor} onChange={e => setValorAlterado(e.target.value)} value={valorAlterado} />
                        </div>
                        <div className="form-group col-md-9 m-3">
                            <label htmlFor="foto">Foto</label>
                            <input type="text" className="form-control" id="foto" placeholder={item.foto} onChange={e => setFotoAlterado(e.target.value)} value={fotoAlterado} />
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={atualizarItem}>Atualizar</button>
                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={deletarItem}>Excluir</button>
                </form>
            </div>
        </>
    )
}

export default FormularioConsultaDetalhes