import './home.css'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import Carrossel from '../../components/Carrossel/carrossel'
import Video from '../../components/Video/video'
import Mapa from '../../components/Mapa/mapa'
import VLibras from "vlibras-react";


function Home() {
    return (
        <div className='home'>
            <Header />
            <VLibras forceOnload={true}/>
            <Carrossel />
            <Video />
            <Mapa />
            <Footer />
        </div>
    )
}

export default Home