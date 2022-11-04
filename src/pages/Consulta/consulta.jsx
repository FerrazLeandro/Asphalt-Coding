import { useEffect, useState } from "react";
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import api from "../../services/api";
import './consulta.css'

function Consulta() {

    const [produto, setProduto] = useState([])


    //Só é executado após o componente ser renderizado
    useEffect(() => {
        getProduto();
        console.log(produto)
    }, [])

    const getProduto = async () => {
        const { data } = await api.get("/produtos")
        setProduto(data)
    }
/*     const popover = new bootstrap.Popover('.example-popover', {
        container: 'body' */
      //})
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


    return (
        <>
            <Header />
<<<<<<< HEAD
            <div className="container w-80 p-3 align-items-center">
            {produto.length > 0 ? (
                <>
                    {produto.map((item) =>
                        <div className="card" style={{ width: "18rem" }} key={item.id}>
                            <img src={item.foto} className="card-img-top" alt="carros" />
                            <div className="card-body">
                                <h5 className="card-title">{item.nome}</h5>
                                <p className="card-text">{item.valor}</p>
                                <a href="#" className="btn btn-primary">Detalhes</a>
=======
            <div className="container w-100 p-3 align-items-center" >
                {produto.length > 0 ? (
                    <>
                        {produto.map((item) =>
                            <div className="card" style={{ width: "18rem" }} key={item.id}>
                                <img src={item.foto} className="card-img-top" alt="carros" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.nome}</h5>
                                    <p className="card-text">{item.valor}</p>

                                    <a tabindex="0" className="btn btn-lg btn-danger" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-title="Carro bolado" data-bs-content="habdfbfduhbauswfayfbrwtefyvfewtvfwtefvtefwvewtyfvewfytv">Detalhes</a>


                                </div>
>>>>>>> 3dc8572c5463d474d01538ba75c897572efbf826
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