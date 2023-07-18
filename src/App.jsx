import { useState } from "react";
import { NavBar } from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const [productoCarro, setearCarro] = useState([]);
  const [total, setTotal] = useState(0);
  const [contadorProductos, setearContador] = useState(0);

  return (
    <>
      <BrowserRouter>
        <NavBar
          productoCarro={productoCarro}
          setearCarro={setearCarro}
          total={total}
          setTotal={setTotal}
          contadorProductos={contadorProductos}
          setearContador={setearContador}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                productoCarro={productoCarro}
                setearCarro={setearCarro}
                total={total}
                setTotal={setTotal}
                contadorProductos={contadorProductos}
                setearContador={setearContador}
              />
            }
          />
          <Route path="/categoria/:idCategoria"  element= {<ItemListContainer 
                 />} />
          <Route path="/item/:id" element= {<ItemDetailContainer/>} />
                      <Route path="*" element="Que miras bobo, anda pa'lla bobo" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//Mi ultima acción fué configurar la APP me falta configurar la generación de elementos en el ItemList