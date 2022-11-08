import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import './detalhes.css'
import Modal from "../../components/Modal/modal";
import FormularioConsultaDetalhes from "../../components/Formulario/formularioDetalhes";


function Detalhes() {

    return (
        <>
            <Header />
            <FormularioConsultaDetalhes />
            <Modal />
            <Footer />
        </>
    )
}

export default Detalhes