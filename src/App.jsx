import { useState } from "react";
import {CartWidget} from "./components/CartWidget";
import { NavBar } from "./components/NavBar";
import { ProductList } from "./components/ProductList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Frutas from "./components/Frutas";
import Verduras from "./components/Verduras";
import Abarrotes from "./components/Abarrotes";


function app(){

    const [productoCarro, setearCarro] = useState([]);
    const [total, setTotal]= useState(0);
    const [contadorProductos, setearContador] = useState(0);



    return(
        <>
        <BrowserRouter>
        <NavBar 
        productoCarro = {productoCarro}
        setearCarro = {setearCarro}
        total={total}
        setTotal={setTotal}
        contadorProductos={contadorProductos}
        setearContador ={setearContador} 
        />
        <Routes>
                <Route path="/" element={      
        <ProductList 
        productoCarro = {productoCarro}
        setearCarro = {setearCarro}
        total={total}
        setTotal={setTotal}
        contadorProductos={contadorProductos}
        setearContador ={setearContador} 
        /> } />
                <Route path="/Frutas" element= {<Frutas
                productoCarro = {productoCarro}
                setearCarro = {setearCarro}
                total={total}
                setTotal={setTotal}
                contadorProductos={contadorProductos}
                setearContador ={setearContador} />}  />
                <Route path="/Verduras" element= {<Verduras
                productoCarro = {productoCarro}
                setearCarro = {setearCarro}
                total={total}
                setTotal={setTotal}
                contadorProductos={contadorProductos}
                setearContador ={setearContador} />} />
                <Route path="/Abarrotes" element= {<Abarrotes
                productoCarro = {productoCarro}
                setearCarro = {setearCarro}
                total={total}
                setTotal={setTotal}
                contadorProductos={contadorProductos}
                setearContador ={setearContador} />} />
                




        </Routes>
       
        </BrowserRouter>
        </>
    );

}

export default app;
