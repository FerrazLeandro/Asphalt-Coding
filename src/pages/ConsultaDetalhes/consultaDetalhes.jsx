import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import './consultaDetalhes.css'
import Modal from "../../components/Modal/modal";
import FormularioConsultaDetalhes from "../../components/Formulario/formularioConsultaDetalhes";


function ConsultaDetalhes() {

    return (
        <>
            <Header />
            <FormularioConsultaDetalhes />
            <Modal />
            <Footer />
        </>
    )
}

export default ConsultaDetalhes