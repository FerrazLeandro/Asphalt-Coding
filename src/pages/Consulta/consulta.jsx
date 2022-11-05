import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import api from "../../services/api";
import './consulta.css'

function Consulta() {

    const [item, setItem] = useState([])

    console.log("Carregamento da função", item)

    useEffect(() => {
        getItem();
        console.log("Passou no use effect", item)
    }, [])
    
    const deletarItem = async (id) => {
        await api.delete(`/produtos/${id}`)
        getItem();
    }

    const getItem = async () => {
        const { data } = await api.get("/produtos")
        setItem(data)
    }
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


    return (
        <>
            <Header />
            <div className="container-fluid w-100 p-3 align-items-center" >
                {item.length > 0 ? (
                    <>
                        {item.map((carro) =>
                            <div className="card" style={{ width: "18rem" }} key={carro.id}>
                                <img src={carro.foto} className="card-img-top" alt="Imagem do carro" />
                                <div className="card-body">
                                    <h5 className="card-title">{carro.modelo}</h5>
                                    <p className="card-text">{carro.valor}</p>
                                    {/* <a tabindex="0" className="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Carro bolado" data-bs-content="habdfbfduhbauswfayfbrwtefyvfewtvfwtefvtefwvewtyfvewfytv">Detalhes</a> */}
                                    <Link className="btn btn-lg btn-primary" to={`/consultaDetalhes`} state={{data: carro}}>Detalhes</Link>
                                    <button type="button" className="btn btn-lg btn-danger"onClick={(e) => (deletarItem(carro.id))}>Excluir</button>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <p>carregando ...</p>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Consulta