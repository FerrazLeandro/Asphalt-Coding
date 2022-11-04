import { Link } from "react-router-dom"
import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import imgFaixa from '../../assets/faixa0.jpg'
import imgFaixa1 from '../../assets/faixa1.jpg'
import imgFaixa2 from '../../assets/faixa2.jpg'
import imgFaixa3 from '../../assets/faixa3.jpg'
import imgFaixa4 from '../../assets/faixa.jpg'
import imgFaixa5 from '../../assets/faixa6.jpg'
import './sobre.css'

function Sobre() {
    return (
        <>
            <Header />
            <div className="container-fluid bg-dark">
                <div className="gallery">
                    <figure className="gallery__item gallery__item--1">
                        <img src={imgFaixa} alt="Image 1" class="gallery__img" />
                    </figure>
                    <figure class="gallery__item gallery__item--2">
                        <img src={imgFaixa1}  alt="Image 2" class="gallery__img"/>
                    </figure>
                    <figure class="gallery__item gallery__item--3">
                        <img src={imgFaixa2}  alt="Image 3" class="gallery__img"/>
                    </figure>
                    <figure class="gallery__item gallery__item--4">
                        <img src={imgFaixa3}  alt="Image 4" class="gallery__img"/>
                    </figure>
                    <figure class="gallery__item gallery__item--5">
                        <img src={imgFaixa4}  alt="Image 5" class="gallery__img"/>
                    </figure>
                    <figure class="gallery__item gallery__item--6">
                        <img src={imgFaixa5}  alt="Image 5" class="gallery__img" />
                    </figure>
                </div>
                <div></div>
            </div>
            <Footer />
        </>
    )
}

export default Sobre