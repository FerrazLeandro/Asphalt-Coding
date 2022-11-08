import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import Modal from "../../components/Modal/Modal";
import FormularioCadastro from "../../components/Formulario/formularioCadastro";
import './cadastro.css'
import VLibras from "vlibras-react";

function Cadastro() {
    return (
        <>
            <Header />
            <VLibras forceOnload={true}/>
            <FormularioCadastro />
            <Modal />
            <Footer />
        </>
    )
}

export default Cadastro