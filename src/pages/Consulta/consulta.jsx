import VLibras from "vlibras-react";
import Footer from "../../components/Footer/footer"
import GridCards from "../../components/GridCards/gridCards"
import Header from "../../components/Header/header"
import Modal from "../../components/Modal/Modal";
import './consulta.css'

function Consulta() {
    return (
        <>
            <Header />
            <VLibras forceOnload={true}/>
            <GridCards />
            <Modal />
            <Footer />
        </>
    )
}

export default Consulta