import { useLocation } from "react-router-dom"

function Formulario() {
    //const { state } = useLocation()
    //console.log(" formulario " + state.data)

    return (
        <>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="modelo">Modelo</label>
                        <input type="text" className="form-control" id="modelo" placeholder="Modelo" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="marca">Marca</label>
                        <input type="text" className="form-control" id="marca" placeholder="Marca" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="valor">Valor</label>
                        <input type="number" className="form-control" id="valor" placeholder="Valor" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="ano">Ano</label>
                        <input type="number" className="form-control" id="ano" placeholder="Ano" />
                    </div>
                    <img className="card-img-top" alt="carros" />
                </div>
                <button type="submit" className="btn btn-primary">Atualizar</button>
                <button type="submit" className="btn btn-primary">Excluir</button>
            </form>
        </>
    )
}

export default Formulario