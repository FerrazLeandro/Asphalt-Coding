import imgCarro2 from '../../assets/carro2.jpg'
import imgCarro1 from '../../assets/carro1.jpg'
import imgCarros3 from '../../assets/carro3.jpg'
import './carrossel.css'

function Carrossel() {
    return (
        <>
            <div id="carouselExampleDark" className="carousel  carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="70">
                        <img src={imgCarro1} className="d-block w-100" alt="imagem de um carro" />
                        <div className="carousel-caption  d-md-block">
                            <h2>Pronto, mesmo que o condutor não esteja!</h2>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="70">
                        <img src={imgCarro2} className="d-block w-100" alt="imagem de um carro" />
                        <div className="carousel-caption  d-md-block">
                            <h2>Preço é o que você paga. Valor é o que você recebe.</h2>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="70">
                        <img src={imgCarros3} className="d-block w-100" alt="imagem de um carro" />
                        <div className="carousel-caption  d-md-block">
                            <h2>Pague com seu salário de DEV!</h2>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carrossel