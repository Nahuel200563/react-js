import { useState } from "react";
import "./App.css";
import Navbar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <ItemListContainer greeting="Bienvenido a ArtThings" />
    </>
  );
}

export default App;
