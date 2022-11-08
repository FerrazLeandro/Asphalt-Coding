import { useState } from "react";
import { useLocation , useNavigate} from "react-router-dom";
import api from "../../services/api";
import './formularioCadastro.css';

function FormularioCadastro() {
    const { state } = useLocation()
    const [item, setItem] = useState(state)
    const [veiculo, setVeiculo] = useState("")
    const [modelo, setModelo] = useState("")
    const [fabricante, setFabricante] = useState("")
    const [valor, setValor] = useState("")
    const [ano, setAno] = useState("")
    const [foto, setFoto] = useState("https://cdn-icons-png.flaticon.com/512/3774/3774278.png")

    const navegar = useNavigate()
    const voltarConsulta = () => {
        navegar("/consulta")
    }

    const cadastrarItem = async (e) => {
        if (veiculo != "" || modelo != "" || fabricante != "" || ano != "" || valor != "" || foto != "https://cdn-icons-png.flaticon.com/512/3774/3774278.png") {
            e.preventDefault();

            const itemAtualizado = {
                veiculo: veiculo,
                modelo: modelo,
                fabricante: fabricante,
                ano: ano,
                valor: valor,
                foto: foto
            }
            await api.post(`/carros/`, itemAtualizado);
            alert("Cadastrado com sucesso")
            voltarConsulta();
        }
    }

    return (
        <>
            <div className="container-detalhes container mt-5">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-12 d-flex justify-content-center">
                            <img src={foto} className="card-img-top w-50" alt="Imagem do carro" />
                        </div>
                        <div className="form-group col-md-5 d-inline-block m-3">
                            <label htmlFor="veiculo">Veículo</label>
                            <input type="text" className="form-control" id="veiculo" placeholder="Veiculo" onChange={e => setVeiculo(e.target.value)} required />
                        </div>
                        <div className="form-group col-md-5 d-inline-block m-3">
                            <label htmlFor="modelo">Modelo</label>
                            <input type="text" className="form-control" id="modelo" placeholder="Modelo" onChange={e => setModelo(e.target.value)} required />
                        </div>
                        <div className="form-group col-md-5 d-inline-block m-3">
                            <label htmlFor="fabricante">Fabricante</label>
                            <input type="text" className="form-control" id="fabricante" placeholder="Fabricante" onChange={e => setFabricante(e.target.value)} required />
                        </div>
                        <div className="form-group col-md-1 d-inline-block m-3">
                            <label htmlFor="ano">Ano</label>
                            <input type="number" className="form-control" id="ano" min={2010} placeholder="Ano" onChange={e => setAno(e.target.value)} required />
                        </div>
                        <div className="form-group col-md-2 d-inline-block m-3">
                            <label htmlFor="valor">Valor</label>
                            <input type="text" className="form-control" id="valor" placeholder="Valor" onChange={e => setValor(e.target.value)} required />
                        </div>
                        <div className="form-group col-md-9 d-inline-block m-3">
                            <label htmlFor="ano">Foto</label>
                            <input type="text" className="form-control" id="foto" placeholder="Url da foto" onChange={e => setFoto(e.target.value)} required />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={cadastrarItem}>Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default FormularioCadastro