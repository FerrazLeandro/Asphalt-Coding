import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import './sobre.css'

function Sobre() {
    return (
        <>
            <Header />
            <div className="fundo">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm w-80 p-3 align-items-center ">
                            <div id="accordion">
                                <div className="card w-100 p-0">
                                    <div className="card-header">
                                        <a className="btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseOne">
                                            <h2>Asphalt Coding</h2>
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse show w-100 p-0" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <h3 className="text-center fw-normal">Nossas soluções para os desafios globais são impulsionadas pela nossa missão de gerar prosperidade por meio de soluções de transporte e pela nossa visão de sermos o fornecedor de soluções de transporte mais desejado e bem-sucedido do mundo.</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-100 p-0">
                                    <div className="card-header">
                                        <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseTwo">
                                            <h2>Alessandra Pinheiro</h2>
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse " data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <h3>Lorem ipsum..</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-100 p-0">
                                    <div className="card-header">
                                        <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseThree">
                                            <h2>Anthony Barbosa</h2>
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <h3>Lorem ipsum..</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-100 p-0">
                                    <div className="card-header">
                                        <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseFour">
                                            <h2>Cleiver Soares</h2>
                                        </a>
                                    </div>
                                    <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <h3>Lorem ipsum..</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-100 p-0">
                                    <div className="card-header">
                                        <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseFive">
                                            <h2>Leandro Ferraz</h2>
                                        </a>
                                    </div>
                                    <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <h3>Lorem ipsum..</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="card w-100 p-0">
                                    <div className="card-header">
                                        <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseSix">
                                            <h2>Rivania Gomes</h2>
                                        </a>
                                    </div>
                                    <div id="collapseSix" className="collapse" data-bs-parent="#accordion">
                                        <div className="card-body">
                                            <h3>Lorem ipsum..</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}

export default Sobre;