import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import './consultaDetalhes.css'
import Modal from "../../components/Modal/Modal";
import FormularioConsultaDetalhes from "../../components/Formulario/formularioConsultaDetalhes";
import VLibras from "vlibras-react";


function ConsultaDetalhes() {

    return (
        <>
            <Header />
            <VLibras forceOnload={true}/>
            <FormularioConsultaDetalhes />
            <Modal />
            <Footer />
        </>
    )
}

export default ConsultaDetalhes