import React from "react";
import { Route, Routes } from "react-router-dom";

import FormCliente from "./views/cliente/FormCliente";
import FormEntregador from "./views/entregador/FormEntregador";
import Home from "./views/home/Home";
import FormProduto from "./views/produto/FormProduto";
import ListCliente from "./views/cliente/ListCliente";
import ListEntregador from "./views/entregador/ListEntregador";
import ListProduto from "./views/produto/ListProduto";
import FormFornecedor from "./views/fornecedor/FormFornecedor";
import ListFornecedor from "./views/fornecedor/ListFornecedor";
import { ProtectedRoute } from "./views/util/ProtectedRoute";
import FormLogin from "./views/login/FormLogin";

function Rotas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-cliente" element={<ListCliente />} />
        <Route path="/list-entregador" element={<ListEntregador />} />
        <Route path="/list-produto" element={<ListProduto />} />
        <Route path="/list-fornecedor" element={<ListFornecedor />} />
        <Route path="/form-cliente" element={<FormCliente />} />
        <Route
          path="/form-produto"
          element={
            <ProtectedRoute>
              <FormProduto />
            </ProtectedRoute>
          }
        />
        <Route path="/form-entregador" element={<FormEntregador />} />
        <Route path="/form-fornecedor" element={<FormFornecedor />} />
        <Route path="/login" element={<FormLogin />} />
      </Routes>
    </>
  );
}

export default Rotas;
