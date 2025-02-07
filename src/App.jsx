import "./App.css";
import Navbar from "./Componentes/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./Componentes/ItemDetailContainer";
import { CartContextProvider } from "./Storage/cartContext";
import CartContainer from "./Componentes/CartContainer";
import { createDocument, exportProductsToDB } from "../data/database";

function App() {
  return (
    <CartContextProvider>
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
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
