import { Link } from "react-router-dom"
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import './sobre.css'

function Sobre() {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm w-80 p-3 align-items-center ">
                        <div id="accordion">
                            <div className="card w-100 p-0">
                                <div className="card-header">
                                    <a className="btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseOne">
                                        <h1>Asphalt Coding</h1>
                                    </a>
                                </div>
                                <div id="collapseOne" className="collapse show w-100 p-0" data-bs-parent="#accordion">
                                    <div className="card-body bg-dark">
                                        <h2>Lorem ipsum..</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-100 p-0">
                                <div className="card-header">
                                    <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseTwo">
                                        <h1>Alessandra Pinheiro</h1>
                                    </a>
                                </div>
                                <div id="collapseTwo" className="collapse " data-bs-parent="#accordion">
                                    <div className="card-body bg-dark">
                                        <h2>Lorem ipsum..</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-100 p-0">
                                <div className="card-header">
                                    <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseThree">
                                        <h1>Anthony Barboza</h1>
                                    </a>
                                </div>
                                <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                                    <div className="card-body bg-dark">
                                        <h2>Lorem ipsum..</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-100 p-0">
                                <div className="card-header">
                                    <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseFour">
                                        <h1>Cleiver Souza</h1>
                                    </a>
                                </div>
                                <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
                                    <div className="card-body bg-dark">
                                        <h2>Lorem ipsum..</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-100 p-0">
                                <div className="card-header">
                                    <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseFive">
                                        <h1>Leandro Ferraz</h1>
                                    </a>
                                </div>
                                <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
                                    <div className="card-body bg-dark">
                                        <h2>Lorem ipsum..</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-100 p-0">
                                <div className="card-header">
                                    <a className="collapsed btn btn-dark w-100" data-bs-toggle="collapse" href="#collapseSix">
                                        <h1>Rivania Gomes</h1>
                                    </a>
                                </div>
                                <div id="collapseSix" className="collapse" data-bs-parent="#accordion">
                                    <div className="card-body bg-dark">
                                        <h2>Lorem ipsum..</h2>
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