import './home.css'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import Carrossel from '../../components/Carrossel/carrossel'
import Video from '../../components/Video/video'



function Home() {
    return (
        <div className='home'>
            <Header />
            <Carrossel />
            <Video />
            <Footer />
        </div>
    )
}

export default Home