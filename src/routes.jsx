import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Vagas from "./Clientes/Aluno/pages/Vagas";
import Transmissao from "./Clientes/Aluno/pages/Transmissao";
import LoginAluno from "./Clientes/Aluno/pages/Login";
import LoginEmpresa from "./Clientes/Empresa/pages/Login";
import CadastroAluno from "./Clientes/Aluno/pages/Cadastro";
import PerfilAluno from "./Clientes/Aluno/pages/Perfil";
import CadastroEmpresa from "./Clientes/Empresa/pages/Cadastro";


function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/perfilaluno" element={<PerfilAluno />} />
        <Route path="/transmissao" element={<Transmissao />} />
        <Route path="/loginempresa" element={<LoginEmpresa/>} />
        <Route path="/loginaluno" element={<LoginAluno />} />
        <Route path="/cadastroaluno" element={<CadastroAluno />} />
        <Route path="/cadastroempresa" element={<CadastroEmpresa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
