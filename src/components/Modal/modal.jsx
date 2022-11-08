import { Link, useNavigate } from "react-router-dom"

function Modal() {
    const navegar = useNavigate()
    const voltarConsulta = () => {
        navegar("/garagem")
    }
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Asphalt Coding</h5>
                        </div>
                        <div className="modal-body">
                            <p>Operação realizada com sucesso!</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-lg btn-primary" data-bs-dismiss="modal" onClick={voltarConsulta}>Voltar para consulta</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal