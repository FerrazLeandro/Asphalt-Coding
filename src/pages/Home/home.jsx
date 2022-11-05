import './home.css'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import Carrossel from '../../components/Carrossel/carrossel'



function Home() {
    return (
        <div className='home'>
            <Header />
            <Carrossel />
            <iframe width="900" height="600" src="https://www.youtube.com/embed/MvVXL-vBQs0" title="Ferrari" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <Footer />
        </div>
    )
}

export default Home