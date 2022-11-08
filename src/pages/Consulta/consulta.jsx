import { useState } from "react";
import Footer from "../../components/Footer/footer"
import GridCards from "../../components/GridCards/gridCards"
import Header from "../../components/Header/header"
import Modal from "../../components/Modal/modal";
import './consulta.css'

function Consulta() {
    return (
        <>
            <Header />
            <GridCards />
            <Modal />
            <Footer />
        </>
    )
}

export default Consulta