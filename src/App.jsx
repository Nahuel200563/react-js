import { useState } from "react";
import "./App.css";
import Navbar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer";
import ItemList from "./Componentes/ItemList";
import FlexContainer from "./Componentes/FlexDirection";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenido a ArtThings" />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route
          path="/category/:catid"
          element={<ItemListContainer greeting="Compra Por Categoria" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
