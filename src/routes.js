import { BrowserRouter,Routes,Route } from "react-router-dom";

// Importar Componentes
import Home from './pages/Home'
import Filme from './pages/Filme'
import ErroLoadPage from "./pages/Erro";
import Favoritos from './pages/Favoritos'

import Header from "./components/Header";


function RouteFlix(){
  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/filme/:id" element={<Filme/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
        <Route path="*" element={<ErroLoadPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteFlix;