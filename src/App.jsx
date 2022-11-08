import './App.css'
import Home from './pages/Home/home'
import { Routes, Route } from 'react-router-dom'
import Cadastro from './pages/Cadastro/cadastro'
import Garagem from './pages/Garagem/garagem'
import Detalhes from './pages/Detalhes/detalhes'
import Sobre from './pages/Sobre/sobre'
import Erro from './pages/Erro/erro'
import VLibras from 'vlibras-react'

function App() {
 

  return (
    <>
    <VLibras forceOnload={true} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/garagem' element={<Garagem />} />
      <Route path='/detalhes' element={<Detalhes />} />
      <Route path='/sobre' element={<Sobre />} />
      <Route path='*' element={<Erro />} /> 
    </Routes>
    </>
  )
}

export default App
