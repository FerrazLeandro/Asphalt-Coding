import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import Modal from "../../components/Modal/modal";
import FormularioCadastro from "../../components/Formulario/formularioCadastro";
import './cadastro.css'

function Cadastro() {
    return (
        <>
            <Header />
            <FormularioCadastro />
            <Modal />
            <Footer />
        </>
    )
}

export default Cadastro