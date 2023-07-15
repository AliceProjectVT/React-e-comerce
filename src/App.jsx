import { useState } from "react";
import {CartWidget} from "./components/CartWidget";
import { NavBar } from "./components/NavBar";
import { ProductList } from "./components/ProductList";

function app(){

    const [productoCarro, setearCarro] = useState([]);
    const [total, setTotal]= useState(0);
    const [contadorProductos, setearContador] = useState(0);



    return(
        <>
        <NavBar 
        productoCarro = {productoCarro}
        setearCarro = {setearCarro}
        total={total}
        setTotal={setTotal}
        contadorProductos={contadorProductos}
        setearContador ={setearContador} 
        />
        <ProductList 
        productoCarro = {productoCarro}
        setearCarro = {setearCarro}
        total={total}
        setTotal={setTotal}
        contadorProductos={contadorProductos}
        setearContador ={setearContador} 
        />
        </>
    );

}

export default app;
