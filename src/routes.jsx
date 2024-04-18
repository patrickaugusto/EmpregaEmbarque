import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Inicio from "./pages/Inicio"
import Vagas from "./pages/Vagas"
import Transmissao from "./pages/Transmissao"
import Login from "./pages/Login"


function AppRoutes(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/vagas" element={ <Vagas /> }></Route>
                    <Route path="/transmissao" element={ <Transmissao /> }></Route>
                    <Route path="/login" element={ <Login /> }></Route>
                    <Route path="/inicio" element={ <Inicio /> }></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
