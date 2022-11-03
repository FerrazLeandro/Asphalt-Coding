import './App.css'
import Home from './pages/Home/home'
import { Routes, Route } from 'react-router-dom'
import Cadastro from './pages/Cadastro/cadastro'
import Consulta from './pages/Consulta/consulta'
import Sobre from './pages/Sobre/sobre'
import Erro from './pages/Erro/erro'

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/consulta' element={<Consulta />} />
      <Route path='/sobre' element={<Sobre />} />
      <Route path='*' element={<Erro />} /> 
    </Routes>
  )
}

export default App
