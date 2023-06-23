import { useState } from "react";

import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";

function app(){

    const [productoCarro, setearCarro] = useState([]);
    const [total, setTotal]= useState(0);
    const [contadorProductos, setearContador] = useState(0);



    return(
        <>
        <Header 
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
