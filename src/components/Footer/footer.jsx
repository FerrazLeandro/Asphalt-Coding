import './footer.css'
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


function Footer() {
    return (
        <>
            <div className="rodape">
                <footer className="text-center text-white">
                    <div className="container p-4 pb-0">

                        <section className="mb-4">
                            <a className="icones btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <FaFacebook />
                            </a>
                            
                            <a className="icones btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <FaTwitter />
                            </a>

                            <a className="icones btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <FaGoogle />
                            </a>

                            <a className="icones btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <FaInstagram />
                            </a>

                            <a className="icones btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <FaLinkedin />
                            </a>

                            <a className="icones btn btn-outline-light btn-floating m-1" href="https://github.com/AnthonyBarbosa15/EcommerceReact" role="button">
                                <FaGithub />
                            </a>
                        </section>
                    </div>

                    <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                        © 2022 Copyright:
                        <a className="text-white" href="https://github.com/AnthonyBarbosa15/EcommerceReact"> Asphalt Coding</a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer